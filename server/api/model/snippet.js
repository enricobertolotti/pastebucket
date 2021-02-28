import { MapStore } from "./../lib/mapstore.js";
import { v4 as uuid } from "uuid";

const SNIPPETS = new Map();
const store = new MapStore("snippets.json");

// Snippet {
//   id: String,
//   body: String
//   added: Date
// }

store.read().then(snippets => {
  for (let [id, snippet] of snippets) {
    SNIPPETS.set(id, snippet);
  }
});

export function getSnippets() {
  return Array.from(SNIPPETS.values());
}

export async function createSnippet(body) {
  const id = uuid();
  const added = Date.now();
  console.log("Body: ", body);
  const snippet = { id, added, body };
  SNIPPETS.set(id, snippet);

  await store.save(SNIPPETS);

  return { ...snippet };
}

export async function updateSnippet(id, body) {
  if (!SNIPPETS.has(id)) {
    return null;
  }
  const snippet = SNIPPETS.get(id);
  snippet.body = body ?? snippet.body;

  await store.save(SNIPPETS);

  return { ...snippet };
}

export async function getSnippet(id) {
  if (!SNIPPETS.has(id)) {
    return null;
  }
  const snippet = SNIPPETS.get(id);
  return { ...snippet };
}

export async function deleteSnippet(id) {
  const success = SNIPPETS.delete(id);

  await store.save(SNIPPETS);

  return success;
}

export async function deleteAll() {
  SNIPPETS = new Map();
  await store.save(SNIPPETS);
  res.status(200).send("Deleted all snippets");
}

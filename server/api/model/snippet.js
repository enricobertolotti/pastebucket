import { v4 as uuid } from "uuid";

const SNIPPETS = new Map();

// Snippet {
//   id: String,
//   body: String
//   added: Date
// }

export function getSnippets() {
  return Array.from(SNIPPETS.values());
}

export function createSnippet(body) {
  const id = uuid();
  const added = Date.now();
  console.log("Body: ", body);
  const snippet = { id, added, body };
  SNIPPETS.set(id, snippet);
  return { ...snippet };
}

export function updateSnippet(id, body) {
  if (!SNIPPETS.has(id)) {
    return null;
  }
  const snippet = SNIPPETS.get(id);
  snippet.body = body ?? snippet.body;
  return { ...snippet };
}

export function getSnippet(id) {
  if (!SNIPPETS.has(id)) {
    return null;
  }
  const snippet = SNIPPETS.get(id);
  return { ...snippet };
}

export function deleteSnippet(id) {
  return SNIPPETS.delete(id);
}

export function deleteAll() {
  SNIPPETS = new Map();
}

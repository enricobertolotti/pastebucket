// Import snippet model
import * as snip from "../model/snippet.js";

export function list(req, res) {
  res.json(snip.getSnippets());
}

export function create(req, res) {
  const { snippet } = req.body;
  if (snippet == undefined) {
    res.status(400).send("[Bad Request] Missing snippet field in request body");
  } else {
    res.send(snip.createSnippet(snippet));
  }
}

export function read(req, res) {
  const { id } = req.params;
  if (id == undefined) {
    res.status(400).send("[Bad Request] Missing ID in request parameters");
  }
  res.json(snip.getSnippet(id));
}

export function update(req, res) {
  const { id } = req.params;
  const { snippet } = req.body;
  console.log(`Updating ${id} with ${snippet}`);
  res.send(snip.updateSnippet(id, snippet));
}

export function deleteSnippet(req, res) {
  const { id } = req.params;
  console.log(`Deleting ${id}`);
  res.send(snip.deleteSnippet(id));
}

export function deleteAll(req, res) {
  console.log(`Deleting all`);
  res.send(snip.deleteAll);
}

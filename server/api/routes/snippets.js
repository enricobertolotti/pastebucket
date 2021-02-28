export function list(req, res) {
  res.json([]);
}

export function create(req, res) {
  const { snippet } = req.body;
  console.log(`${snippet} created`);
  res.send("ok");
}

export function read(req, res) {
  const { id } = req.params;
  res.json({ id, string: "First snippet" });
}

export function update(req, res) {
  const { id } = req.params;
  const { snippet } = req.body;
  console.log(`Updating ${id} with ${snippet}`);
  res.send("ok");
}

export function deleteSnippet(req, res) {
  const { id } = req.params;
  console.log(`Deleting ${id}`);
  res.send("ok");
}

export function deleteAll(req, res) {
  console.log(`Deleting all`);
  res.send("ok");
}

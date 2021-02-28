import { readFile, writeFile } from "fs/promises";
import path from "path";

const dataDir = "data";

export class MapStore {
  filepath = "";

  constructor(filename) {
    this.filepath = path.resolve(dataDir, filename);
  }

  async save(data) {
    console.log(`Writing to ${this.filepath}`);
    const serializedData = JSON.stringify(Array.from(data.entries()));
    await writeFile(this.filepath, serializedData);
  }

  async read() {
    console.log(`Reading from ${this.filepath}`);
    const data = await readFile(this.filepath, "utf-8");
    const parsed = JSON.parse(data);
    return new Map(parsed);
  }
}

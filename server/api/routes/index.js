import express from "express";
import * as snippets from "./snippets.js";
const router = express.Router();

router.get("/snippets", snippets.list); // list
router.post("/snippets/", snippets.create); // create
router.get("/snippets/:id", snippets.read); // read
router.post("/snippets/:id", snippets.update); //update
router.delete("/snippets/:id", snippets.deleteSnippet); // delete single
router.delete("/snippets", snippets.deleteAll); // delete all

export default router;

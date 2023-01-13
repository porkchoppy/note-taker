const db = require("../db/db.json");
const fs = require("fs");
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const {deleteNote} = require("../lib/utils")

router.get("/notes", (req, res) => {
  res.json(db);
});
    
router.post('/notes', (req, res) => {
  const myNewNote = req.body;
    myNewNote.id = uuidv4(myNewNote.id);

  db.push(myNewNote);

  fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
    if (err) {
      return res.sendStatus(500);
    }
      res.json(myNewNote);
  });
});

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id
  const result = deleteNote(noteId, db)
  if (!result) {
    res.sendStatus(404)
  }
    res.sendStatus(204)
});
    
module.exports = router;
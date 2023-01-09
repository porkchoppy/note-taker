const db = require("../db/db.json");
const fs = require("fs");
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
  res.json(db);
});
    
router.post('/api/notes', (req, res) => {
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
  const params = req.params.id
  updateDb(params, notes);
  res.redirect("");
});
    
module.exports = router;
const db = require("../db/db.json");
const fs = require("fs");
const router = require('express').Router();
const uniqid = require("uniqid");

router.get('/notes', (req, res) => {
       res.json(db);
});
    
router.post('/api/notes', (req, res) => {
       const myNewNote = req.body;
       myNewNote.id = uniqid(myNewNote.id);

       db.push(myNewNote);

       fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
         if (err) {
           return res.sendStatus(500);
         }
         res.json(myNewNote);
       });
});

router.delete('/notes/:id', (req, res) => {
       
});
    
module.exports = router;
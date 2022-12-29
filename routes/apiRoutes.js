const db = require("../db/db.json");
const fs = require("fs");
const router = require('express').Router();

router.get('/notes', function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});
    
router.post('/notes', function (req, res) {
    
});

router.delete('/notes', function (req, res){

});
    
module.exports = router;
const fs = require("fs");
const path = require("path");

function findById(id, notes) {
    const result = notes.find(note => note.id===id) 
    return result
};

function deleteNote(id, notes) {
    const note = findById(id, notes)
    if (note) {
        const index = notes.indexOf(note)
        notes.splice(index, 1)
        fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes)
        )
         return true 
    }
    return false
}

module.exports = {
    findById, deleteNote
}
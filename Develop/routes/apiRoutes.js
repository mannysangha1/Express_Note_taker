const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const router = express.Router();
const filePath = path.join(__dirname, '../db/db.json');

// Get request
router.get("/api/notes",(req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

// Post Request
router.post("/api/notes", async (req, res)=>{
    let note = (req.body);
    fs.readFile(filePath, function (err, data){
        let json = JSON.parse(data)
        json.push(note);
        let newData = JSON.stringify(json);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), newData)
        res.sendFile(path.join(__dirname, '../db/db.json'))
    })
})

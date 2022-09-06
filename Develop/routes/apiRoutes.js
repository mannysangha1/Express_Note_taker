const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const router = express.Router();
const filePath = path.join(__dirname, '../db/db.json');

// Get request
router.get("/api/notes",(req, res) => {
    
})

// Post Request


const express = require("express");
const { dirname } = require("path");
const path = require("path");
const router = express.Router();

// ROUTES

router.get("/",(req,res) => (
    res.sendFile(path.join(dirname, "../public/index.html"))
));
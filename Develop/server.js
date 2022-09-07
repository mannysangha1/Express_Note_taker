const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();

var PORT = process.env.PORT || 3000;

// MIDDLEWARE

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


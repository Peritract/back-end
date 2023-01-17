// Describes the server/API

const express = require("express"); // Access to the Express library

const app = express(); // Make a very basic server using Express

// Tell the app what kinds of request to listen for (and how to handle them)

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

module.exports = app; // Make the server available to other files
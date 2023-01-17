// Describes the server/API

const express = require("express"); // Access to the Express library
const cors = require("cors") // Access to the cors library

const { goats, nextId } = require("./goats");

const app = express(); // Make a very basic server using Express

// Middleware

// req -> [middleware] -> [endpoint A, endpoint B] -> reponse
// req -> [cors (add header to response)] -> [API] -> response
// req -> [auth (check the req headers for a key)] -> [API] -> response

app.use(cors())


// Endpoints

app.get("/", (req, res) => {
    res.json({
        "message": "Welcome to the GOAT API!"
    })
})

app.get("/goats", (req, res) => {

    // Extract maxAge query param
    const { maxAge } = req.query;
    
    if (maxAge) {
        res.json(goats.filter(g => g["age"] <= maxAge));
    } else {
        res.json(goats);
    }
})

app.get("/goats/:id", (req, res) => {

    const id = req.params["id"];

    // Filter the goat list for the relevant goat
    const goat = goats.filter(g => g["id"] == id)[0];

    if (goat) {
        // Send out the goat
        res.json(goat);
    } else {
        // Send a status of 404 with a message
        res.status(404).json({
            error: "No such goat!"
        })
    }
})

module.exports = app; // Make the server available to other files
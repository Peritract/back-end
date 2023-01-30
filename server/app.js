// Describes the server/API

const express = require("express"); // Access to the Express library
const cors = require("cors") // Access to the cors library

let { goats, nextId } = require("./goats");
const logger = require("./logger");

const app = express(); // Make a very basic server using Express

// Middleware

// req -> [middleware] -> [endpoint A, endpoint B] -> reponse
// req -> [cors (add header to response)] -> [API] -> response
// req -> [auth (check the req headers for a key)] -> [API] -> response

app.use(express.json()); // Layer to read the body of POSTS
app.use(cors()); // Layer to add CORS headers
app.use(logger); // Layer to log access

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

app.post("/goats", (req, res) => {

    // Extract the information
    const newGoat = req.body;

    // Check each required property (bit of a hack)
    // true if any property does not appear in the object
    const propMissing = ["name", "age", "sex", "favouriteColour"].some(p => !Object.hasOwn(newGoat, p));

    if (propMissing) {
        res.status(400).json({
            "error": "A goat cannot be created without all necessary information."
        })
    } else {

    // Add the id to goat data
    newGoat["id"] = nextId;

    // Increase the nextId for next time
    nextId += 1;

    // Add the goat to the goat list
    goats.push(newGoat);

    // Report our success
    res.status(201).json(newGoat);

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

app.update("/goats/:id", (req, res) => {
    // Pull out the id from the URL
    const id = req.params["id"];

    // Check if that goat is real
    const exists = goats.filter(g => g["id"] == id).length == 1;

    // If it is,
    if (exists){
        
        

        // Return a relevant status
        res.sendStatus(204);

    } else {
        res.status(404).json({
            error: "No such goat!"
        });
    }
})

app.delete("/goats/:id", (req, res) => {

    // Pull out the id from the URL
    const id = req.params["id"];

    // Check if that goat is real
    const exists = goats.filter(g => g["id"] == id).length == 1;

    // If it is,
    if (exists){
        // Delete goat / create a new version of goats that doesn't contain it.
        goats = goats.filter(g => g["id"] != id);

        // Return a relevant status
        res.sendStatus(204);

    } else {
        res.status(404).json({
            error: "No such goat!"
        });
    }
})

module.exports = app; // Make the server available to other files
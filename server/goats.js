// Stores starting data
// Would be replaced with an actual DB in a larger project

const goats = [
        { "id": 1,
          "name": "Billy",
          "age": 6,
          "sex": "M",
          "favouriteColour": "magenta" },
        { "id": 2,
          "name": "Beehronica",
          "age": 3,
          "sex": "F",
          "favouriteColour": "cerulean" },
        { "id": 3,
          "name": "Ezekiel",
          "age": 15,
          "sex": "M",
          "favouriteColour": "grey" }
        ];

let nextId = 4;

module.exports = { goats, nextId };
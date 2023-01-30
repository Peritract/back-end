// Run the server/API


const app = require("./app");

// Set the app off listening with a callback function

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
}); // On a numbered port
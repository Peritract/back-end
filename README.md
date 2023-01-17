# Back-end development

## Client

Everything is built on top of `index.html`; open this file in a browser to interact with the site.

## Server

### Installation

1. Navigate to the `./server` folder
2. Run `npm install -D`

### Development

From the `./server` folder, run `npm run dev`.

### Production/deployment

From the `./server` folder, run `npm run start`.

## Challenges

- Add a button to each goat card that allows you to delete the goat. On deletion, the goat card should disappear from the list and be forgotten by the API. The page should not refresh
- Handle creation requests that don't have all required data (name, age, sex, favouriteColour) by sending an appropriate message and status code
- Add an update route that allows users to change the age or favourite colour of a goat based on its id.
- Allow goat updates from the front-end interface


## Notes

Front-end development: building stuff the user interacts with
Back-end development: building services other code interacts with

Client: makes requests
Server: listens for and responds to requests
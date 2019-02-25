# 🚀 Star Wars Card Game - B2W Challenge
Mini Star Wars card game. You get one planet card containing the following details: **planet name**, **population**, **climate**, **terrain**, **apparitions in films**. Draw new cards whenever the **Next** button is pressed.
This game consumes data from the Star Wars API ([SWAPI](https://swapi.co/)).

## Technologies
 - ReactJS
   - Axios
   - Create React App
   - CSS Modules
   - React Content Loader
   - React Reveal

## Requirements
- NodeJS (~10.15.1)
- npm (~6.8.0)

## Setup
Clone this repository and go to the destination folder.

Install modules:
`npm install`

Run:
`npm start`

## How it works?
Every time the page is loaded a`GET` request is sent to the API, fetching the nº of planets available. Randomly 10 planets are picked and its details stored inside a deck-like array.
The application should always display the first card from the deck, which contains the planet's descriptions. When **next** button is pressed, the card being displayed is removed from the deck and the application reveals the next card.
If only one card is remaining in the deck, the application fetch new cards from the API.

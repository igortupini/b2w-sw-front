
# Star Wars Card Game - B2W
Mini Star Wars card game. You got one card of a planet containing the following details: **planet name**, **population**, **climate**, **terrain**, **apparitions in films**. You can draw new cards whenever you want by pressing the **Next** button.

## Stack
 - ReactJS
   - Axios
   - Normalize CSS
   - Create React App
   - CSS Modules
   - React Content Loader
 - [Google Fonts](https://fonts.google.com/)
 - [SWAPI API](https://swapi.co/)

## Requirements
Not yet tested in other versions or systems.
- NodeJS (10.15.1)
- npm (6.8.0)
- Linux
## Setup
Clone the repository and go to the destination folder.

Install modules:
`npm install`

Run:
`npm start`

## How it works?
Every time you load the page a`GET` request is sent API fetching the nº of planets available. Randomly 10 planets are picked and its details storaged inside an array.
The card always display the first array item, which contains an object describing the planet details. When the **next** button is pushed, the item being displayed is removed from the array and the card component re-rendered on the screen, showing a new planet card.

Only when one item is remaining in the array, the application fetch new planets from the API.

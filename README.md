# README

## Assignment

You are supplied a list of cities that Walmart is interested in. You can find this in `./src/store-cities.json`

1. Create a text input in `./src/App.js`

1. As the user types in a text input field, a list of matching options should appear below it. <br />
   The list should contain cities from `store-cities.json`
   that begin with the user entered value (case insensitive).
1. As you type a new character, it should automatically filter the list and display it to the user.
1. If the input field is empty, a list should not return (whitespace is considered empty)
1. Clicking on a filtered city should populate the full name of the city in the input, and then hide the list.

## Dev Constraints

1. Use functional components, not class components.

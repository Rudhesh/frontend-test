# AIVITEX - Frontend Test - Chocolate Calendar

A chocolate calendar is a special kind of chocolate box container composed by 31 slots, one for each day of December.
The concept is that one is allowed to get a treat every day before the end of the year, or hold on to it and eat all of the past days at once. But never eat the chocolate from the days ahed.

The goal of this challenge is to create a virtual representation of a winter chocolate calendar, using the this front-end boilerplate and requests to the provided local server.

## Rules

- User is allowed to open chocolate from past day slots (if today is 3rd of Dec, only 1st, 2nd and 3rd are available).
- User can eat chocolates only from open slots

## API

- GET /chocolates - receive the consumption list of the chocolate calendar
- POST /open/chocolate (body json { day }) - open a chocolate slot
- POST /eat/chocolate (body json { day }) - eat a chocolate slot

## Requirements

- prefer redux toolkits to manage state changes and axios requests
- use CSS Flexbox and Grid for layout management
- use mui components and mui styled component bridge (from @mui/system)
- define automated test using jest and testing library
- write a description of the final result in RESULT.md
- create a pull request for your solution from a sepperate branch pointing to main

## description of the final result

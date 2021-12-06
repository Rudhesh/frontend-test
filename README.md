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

First I create state action and reducer using redux toolkit.

then I create a function named checkDoorToOpen inside I used new Date() method and get present day and stored in variable date

then create 3 functions named
chocolate() inside using post method
getChocolate() inside using get method
eatChocolate(input)inside using post method

I used chocolate() function to sent data to server using axios.

I used getChocolate() function to get data from server using axios.

I used eatChocolate() function to get data from server second time using axios.

After that I used if statement: if date >= inputDate parameter (coming from clicking the date on the browser)

then called chocolate() function
Which create object on server
&
then called getChocolate() function
which get object from the server
and save in the openBox state in the redux store

(Idea is if inputDate is less then or equal to present day then sent data to server and get the same data back
)

then I create component folder inside create Door.jsx file that holds our doors data.

then I return div called container inside container more divs called content and calender, Its used for styling this project

and then in calender tag I map over the doors data which I imported from the components folder

Inside I loop over openBox using some() method so I can iterate individually

used ternary operator

if selected.day === door.id then

show eatChocolate() function else show checkDoorToOpen() function

eatChocolate() function trigger AlertBox component

AlertBox.jsx consist some elements like picture and paragraph which display on browser.

I create one more state named login that stored boolean value

this I use it to switch the AlterBox with the help of button.

At last I used jest and testing library and build the code and run the test.

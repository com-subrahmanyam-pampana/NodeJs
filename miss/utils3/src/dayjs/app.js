/*Day.js is a minimalist JavaScript library that parses, 
validates, manipulates, and displays dates and times for
 modern browsers with 
a largely Moment.js-compatible API. */

const dayjs = require('dayjs')

//returns current date
var now = dayjs()
console.log(now)

//Manuplate
const newdate=dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString();


console.log(newDate)
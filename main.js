console.log("Task 2: Calculate the Perimeter of the rectangle given by two sides")
console.log("Let x be equal to 4 and y be equal to 5")
let x = 4
let y = 5
let P= (x+y)*2
let d="Then perimeter equals to"
console.log(d, P)
console.log("Task 13: Return the greatest among the given two numbers")
console.log("Let a be equal to 20 and b be equal to 10")
let a= 20
let b= 10
let f= "The greatest number is"
if ( a > b ) {
console.log(f,a)
 }
else if ( a == b ) {
 console.log("Numbers are equal")
  }
else {
console.log(f,b)
}
console.log("Task 15: Return the day of the week by its numbers")
console.log("Let the day be Sunday")
const weekdays={
 Monday:1,
 Tuesday:2,
 Wednesday:3,
 Thursday:4,
 Friday:5,
 Saturday:6,
 Sunday:7
}
console.log(weekdays)
w= weekdays.Sunday
weekday= "Today is the"


if (w== weekdays.Monday){
  console.log("Today is the", weekdays.Monday, "th day")
}
else if( w== weekdays.Tuesday){
  console.log(weekday,weekdays.Tuesday, "th day")
}
else if(w==weekdays.Wednesday){
    console.log(weekday,weekdays.Wednesday, "th day")
}
else if(w==weekdays.Thursday){
    console.log(weekday,weekdays.Thursday, "th day")
}
else if(w==weekdays.Friday){
    console.log(weekday,weekdays.Friday, "th day")
}
else if(w==weekdays.Saturday){
    console.log(weekday,weekdays.Saturday, "th day")
}
else{
  console.log(weekday, weekdays.Sunday, "th day")
}

// Set date to current date
const date = new Date();

// #region Leap Year Check

// const year = date.getFullYear()
const year = 2020;
console.log(`Current year: ${year}`)
let isLeapYear = false;

if (year % 4 === 0)  {
    isLeapYear = true;
} else if (year % 100 === 4) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}
console.log(`Leap Year: ${isLeapYear}`)

let totalYearDays = 365;
if (isLeapYear) {
    totalYearDays = 366;
};
// #endregion


console.log(`Total Days = ${totalYearDays}`)

// array list of months
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

// display Month in calHeader
document.querySelector('.selectedMonth').innerHTML = months[date.getMonth()]

// display date in calHeader
document.querySelector('.selectedDate').innerHTML = date.toDateString();



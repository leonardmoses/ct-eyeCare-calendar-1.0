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

// Set date to current date
let date = new Date();

let decPrevYear = new Date(`Dec 1, ${date.getFullYear()-1}`);

let dec1Padding = decPrevYear.getDay()+1

console.log(date)
console.log(decPrevYear)
console.log(decPrevYear.getDay())
console.log(dec1Padding)

// #region Leap Year Check

const year = date.getFullYear()
// const year = 2020;
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

document.querySelector('.topHeaderContent').innerHTML = date.getFullYear();

// display Month in calHeader
document.querySelector('.selectedMonth').innerHTML = months[date.getMonth()];

// display date in calHeader
document.querySelector('.selectedDate').innerHTML = date.toDateString();


const firstDayOfYear = new Date(date.getFullYear(), 0)

const monthDays = document.querySelector('.julianDays');

let days = "";

for (let i = 1; i<= dec1Padding; i++) {
    days += `<div class='prev-year-padding'>${i}</div>`;
    monthDays.innerHTML = days;
}

for (let i = 1; i<= 31; i++) {
    days += `<div class='prev-year-days'>${i}</div>`;
    monthDays.innerHTML = days;
}

for (let i = 1; i<= totalYearDays; i++) {
    days += `<div class='current-year-days'>${i}</div>`;
    monthDays.innerHTML = days;
}

for (let i = 1; i<= 31; i++) {
    days += `<div class='prev-year-days'>${i}</div>`;
    monthDays.innerHTML = days;
}

console.log(firstDayOfYear)

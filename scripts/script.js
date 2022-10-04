
// get current date from built in date method
const date = new Date();
// get current month (index number) from built in date method
const month = date.getMonth();

// // Testing: change index num of the month to test last day of the month.
// date.setMonth(10);

// set the date to the first day of the current Month
date.setDate(1);
// check(in console) which day of the week is the first day of month.
console.log(date.getDay()+": Index of 1st day of month");

// get class for days of month. Used later to display days of month.
const monthDays =document.querySelector('.days');

// get last date of the current month
const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

// check which day of the week is the last day of month.
const lastDayIndex = new Date(date.getFullYear(), date.getMonth() +1, 0).getDay();
console.log(lastDayIndex)

// count how many days come after the last day of month.
const nextDays = 7 - lastDayIndex - 1;
console.log(nextDays)

// list of months to convert index number to written format
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
    "December"
]

// display the h1 Month to current Month
document.querySelector('.date h1').innerHTML = months[month];
// display the p date to current date
document.querySelector('.date p').innerHTML = date.toDateString()


let days = "";

for(let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x +1}</div>`;
}

for(let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }

    // monthDays.innerHTML = days;
}

for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days;
}

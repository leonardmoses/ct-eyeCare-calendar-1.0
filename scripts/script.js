
// get current date from built in date method
const date = new Date();
// get current month (index number) from built in date method
const month = date.getMonth();

const monthDays =document.querySelector('.days');

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

for(let i = 1; i<=31; i++) {

    // days += `<div>${i}</div>`
    // monthDays.innerHTML = days;
}



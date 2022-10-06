const date = new Date();

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

document.querySelector('.selectedMonth').innerHTML = months[date.getMonth()]

document.querySelector('.selectedDate').innerHTML = date.toDateString();


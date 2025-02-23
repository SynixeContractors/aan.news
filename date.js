// get the current date, add 10 years

const date = new Date();
date.setFullYear(date.getFullYear() + 10);

// replace .date with the date, in the format Monday, Jan 1st, 2020
document.querySelector('.date').textContent = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

// const message = 'Hello World!'
// alert(message);

// const sum = 2 + 2;
// alert (sum);

const age = parseFloat(prompt('Enter yor age'));
alert('Your age is ' + age);

const nextAge = add(age, 1);
alert('Next year you will be ' + nextAge);

if (age < 18) {
    alert('You are underaget!');
} else {
    alert('You are adust!');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}
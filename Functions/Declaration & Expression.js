/*
  calculate age from the given birth year
*/

// Function declaration

function calcAge1(birthyear) {
    const age = 2024 - birthyear;
    return age;
}

const age1 = calcAge1(1987);
console.log(age1);

// Function expression

const calcAge2 = function(birthyear) {
    return 2024 - birthyear;
}

const age2 = age2(1985);

console.log(calcAge1, calcAge2);

// Function is called before the function in function declaration

// const age1 = calcAge1(1987); // don't forget to comment out line 12 before calling this & remove // here in order to work

function calcAge1(birthyear) {
    const age = 2024 - birthyear;
    return age;
}

// const age1 = calcAge1(1987);
console.log(age1);

// Best practice is to follow using function expressions

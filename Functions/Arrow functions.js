/*
  Same problem as the previous one
*/

// Arrow function one liners

const calcAge = birthyear => 2024 - birthyear;
const age = calcAge(1991);
console.log(age);

// Arrow function with atleast one parameter
/*
  calculate years left until retirement
*/

const yearsUntilRetirement = birthyear => {
    const age = 2024 - birthyear;
    const retirement = 60 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

// Arrow functions with multiple parameters

const yearsUntilRetirement2 = (birthyear2, firstName) => {
    const age = 2024 - birthyear2;
    const retirement = 60;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(1991, 'Samual'));

// Functions calling other functions

/*
  Now calculate number of pieces a fruit has been cut into
*/

const cutFruitMachine = (fruit) => {
    return fruit * 4;
}

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitMachine(apples);
    const orangePieces = cutFruitMachine(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(3, 6));

// Best practices to follow is to use arrow functions when it is necessary but not mandatory to follow!!!
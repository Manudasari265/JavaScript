// Normal way of assigning multiple values to variables

const friend1 = 'Manoj';
const friend2 = 'Dasari';
const friend3 = 'Raju';

// Array representation

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Other representation

const years = new Array(1991, 1992, 2005);
console.log(years);

// Individual logging onto screen

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Individual assigning values
friends[2] = 'Jay';
friends[3] = 'Mansion';
console.log(friends);

// Array can contain various datatypes in one container

const firstName = 'Manoj';
const data = [firstName, 'Dasari', 2024 - 2001, 'developer'];
console.log(data);
console.log(data.length);

// Exercise

const calcAge = function(birthyear) {
    return 2024 - birthyear;
}

const birthYears = [1990, 1867, 1987, 2002, 2005];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);
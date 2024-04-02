const manoj = {
    FirstName: 'Manoj',
    lastName: 'Dasari',
    age: 2024 - 2001,
    job: 'Software engineer',
    roles: ['frontend', 'backend', 'web 3.0']
}

// dot representation

console.log(manoj.FirstName);
console.log(manoj.lastName);

// bracket representation

console.log(manoj['FirstName']);
const nameKey = 'Name';
console.log(manoj['First' + nameKey]);
console.log(manoj['last' + nameKey]);

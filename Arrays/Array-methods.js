const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // last element
const poppedElement = friends.pop(); // stores the popped element
console.log(poppedElement);
console.log(friends);

friends.shift(); // first element
console.log(friends);


// Gives specific index of element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// checks for strict equality
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));


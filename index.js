const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

const people = [
  { name: 'John', year: 2000 },
  { name: 'Jane', year: 1995 },
  { name: 'Mark', year: 1980 },
  { name: 'Lucy', year: 2004 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
// Array.prototype.every() // is everyone 19?
const isSomeoneAtLeastAbove19 = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isSomeoneAtLeastAbove19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423
const foundId = comments.find((comment) => comment.id === 823423);
console.log(foundId);

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 823423
const foundIndex = comments.findIndex((comment) => comment.id === 823423);
console.log(foundIndex);

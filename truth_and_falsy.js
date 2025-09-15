// true

console.log(Boolean(1));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean(10));
console.log(Boolean(79));
console.log(Boolean(-10));
console.log(Boolean(-79));

//) false (Only '0',  'NaN', 'undefined', 'null' are false, otherwise all are true.)

console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-0)); // '-0' always exist in javascript
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
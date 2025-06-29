// falsy.js

console.log(Boolean(false));     // => false

// Cadenas vacías

console.log(Boolean(""));        // => false
console.log(Boolean(''));        // => false
console.log(Boolean(``));        // => false

// Número 0

console.log(Boolean(0));         // => false
console.log(Boolean(-0));        // => false
console.log(Boolean(0n));        // => false

// NaN

console.log(Boolean(NaN));       // => false

// Nullish (null y undefined)

console.log(Boolean(null));      // => false
console.log(Boolean(undefined)); // => false
// truthy.js

console.log(Boolean(true));                // => true

// Arreglos (incluso vacíos)

console.log(Boolean([1, 2, 3]));           // => true
console.log(Boolean([]));                  // => true

// Objetos (incluso vacíos)

console.log(Boolean({ a: 1 }));            // => true
console.log(Boolean({}));                  // => true

// Maps (incluso vacíos)

console.log(Boolean(new Map([['a', 1]]))); // => true
console.log(Boolean(new Map()));           // => true

// Sets (incluso vacíos)

console.log(Boolean(new Set([1, 2, 3])));  // => true
console.log(Boolean(new Set()));           // => true

// Funciones (son objetos)

console.log(Boolean(function () { }));     // => true
console.log(Boolean(() => { }));           // => true

// Cadenas no vacías

console.log(Boolean("0"));                 // => true
console.log(Boolean("false"));             // => true
console.log(Boolean("Hola"));              // => true

// Números (excepto el 0 y NaN)

console.log(Boolean(42));                  // => true
console.log(Boolean(-42));                 // => true
console.log(Boolean(3.14));                // => true
console.log(Boolean(-3.14));               // => true
console.log(Boolean(Infinity));            // => true
console.log(Boolean(-Infinity));           // => true
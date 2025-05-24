// true

console.log(Boolean(true));

// Arreglos y objetos (incluso vacíos)

console.log(Boolean({ a: 1 }));
console.log(Boolean({}));

console.log(Boolean([1, 2, 3]));
console.log(Boolean([]));

// Maps y Sets (incluso vacíos)

console.log(Boolean(new Map([['a', 1]])));
console.log(Boolean(new Map()));

console.log(Boolean(new Set([1, 2, 3])));
console.log(Boolean(new Set()));

// Funciones (son objetos)

console.log(Boolean(function () { }));
console.log(Boolean(() => { }));

// Cadenas no vacías

console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean("Hola"));

// Números (excepto el 0 y NaN)

console.log(Boolean(42));
console.log(Boolean(-42));
console.log(Boolean(3.14));
console.log(Boolean(-3.14));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
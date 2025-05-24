// false

console.log(Boolean(false));

// Cadenas vacías

console.log(Boolean(""));
console.log(Boolean(''));
console.log(Boolean(``));

// Número 0

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));

// NaN

console.log(Boolean(NaN));

// Nullish (null y undefined)

console.log(Boolean(null));
console.log(Boolean(undefined));
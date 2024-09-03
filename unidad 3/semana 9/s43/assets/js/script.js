let nums = [1, 2, 3, 4, 5];
console.log(nums)

//Usando map
let numsPorDos = nums.map((n) => n * 2);

console.log(numsPorDos);
console.log(nums);

//Dado el siguiente array de strings, crear un array indicando que elementos están en mayuscula (true) y cuales en miinuscula (false)
console.log(2);

let letras = ["a", "B", "c", "D", "e"]; //[false, true, false, true, false]

let sonMayusculas = letras.map((c) => c.toUpperCase() == c);

console.log(sonMayusculas);

//3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondra "palabra corta".

// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"

let palabras = [
  "hola",
  "computadora",
  "casa",
  "programacion",
  "javascript",
  "ciclo",
];

let clasificacion = palabras.map((palabra) => {
  return palabra.length > 7 ? "palabra larga" : "palabra corta";
});

console.log(clasificacion);

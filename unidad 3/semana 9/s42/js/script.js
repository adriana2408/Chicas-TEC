
/*let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];
console.log(letras)

// .indexOf(elemento, desde)
// Devuelve el índice de la primera ocurrencia de un elemento en un arreglo, desde una posición determinada
// Busca desde el inicio
console.log("indexOF");

let indice = letras.indexOf("a");
console.log(indice);
console.log(letras.indexOf("d"));

// Busca desde el índice especificado
console.log(letras.indexOf("a", 4));

// Buscamos un elemento que no existe en el arreglo
console.log(letras.indexOf("x"));
console.log("lastIndexOF");

console.log(letras.lastIndexOf("a"));

console.log(letras.lastIndexOf("a", 1));

console.log("includes");
console.log(letras.includes("c"));
console.log(Letras.includes("c", 3));
 */

let nums = [34, 65, 23, 45, 96, 143, 4, 56];
console.log(nums);

let coincidencia = nums.find((num) => num > 60);
let coincidenciaIndex = num.findIndex((num) => num > 60);

let filtrado = nums.filter((num) => num > 60);

console.log(coincidencia);
console.log(coincidenciaIndex);
console.log(filtrado);

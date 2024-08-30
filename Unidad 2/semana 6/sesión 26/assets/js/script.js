// EJERCICIO 1
// Múmero del 0 al 5
// Decjaremos nuestra variable (esto irá cambiando con el bucle)

/*

let number = 0;
while (number <= 5) {
    console.log(number);
    number++;
}

console.log("");

// numeros pares
while (number <= 100) {
    if (number % 2 === 0) {
        console.log(number);
    }

    number++;
}

*/
//numeros impares
/*let number = 1;

while (number <= 12) {
    if (number % 2 != 0) {
        console.log(number);
    }
    number++;
}

//Recorrer arreglos con el bucle while
const paises = ['Perú', 'Uruguay', 'Chile', 'Argentina'];

let i = 0;

while (i < paises.length) {
    console.log(paises[i]);
    i++;
}

*/
//Do while
let number = 0;

do {
  console.log(number);
  number++;
} while (number <= 5);

console.log('');


let nombre = prompt('Ingresa tu nombre');
console.log(nombre);

let edad = prompt('Ingresa tu edad');
console.log(edad);


//REGEX
const patron = /hola/;
// const patron = /hola[0-9]mundo/;
// const patron = /hola[0-9]+mundo/;
// const patron = /^hola$/;
// const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while (!patron.test(dato));
console.log('Coincidencia');

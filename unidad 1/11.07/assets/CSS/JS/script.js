/*
// STRINGS
// Sintaxis de strings

// Comillas simples
let palabra1 = 'String con comillas simples';
console.log(palabra1);

// Comillas dobles
let palabra2 = "String con comillas dobles";
console.log(palabra2);

// Combinación de simples y dobles
let palabra3 = "McDonald's";
console.log(palabra3);

let palabra4 = 'Yo siempre digo: "Nunca dejen de estudiar"';
console.log(palabra4);
console.log("");

// Comillas invertidas (Backticks)
// NO ES LA TILDE (´)
// SON ESTAS (`)
let palabra5 = `String con comillas invertidas (backticks)`;
console.log(palabra5);

let palabra6 = `Puedo escribir ambas comillas ' " ' " sin problemas`;
console.log(palabra6);
console.log("");

// Strings multilinea
let palabra7 = 'String multilinea'
+ '\nCon comillas simples';

console.log(palabra7);

let palabra8 = "String multilinea"
+ "\nCon comillas dobles";

console.log(palabra8);

let palabra9 = `String multilinea
Con backticks
No tengo que agregar saltos de línea
Ni concatenar strings`

console.log(palabra9);
console.log("");

// Interpolación de strings
let nombre = 'Zoé';
let edad = 34;
let pais = 'Perú';

// Sin interpolar
let palabra10 = "Hola me llamo " + nombre + " y tengo " + edad + " años.";
console.log(palabra10);

// Interpolación usando backticks
let palabra11 = `Hola me llamo ${nombre}
Tengo ${edad} años
Soy de ${pais}.`;

console.log(palabra11);
console.log("");

// Metacaracteres
// Salto de línea \n
let palabra12 = 'Salto de\nlínea';
console.log(palabra12);

// Tabulación \t
let palabra13 = '\tTabulación';
console.log(palabra13);

// Backlash \\
let palabra14 = "Diagonal \\ invertida \\";
console.log(palabra14);

// Comillas simples \'
let palabra15 = 'McDonald\'s';
console.log(palabra15);

// Comillas simples \"
let palabra16 = "Yo siempre digo: \"Nunca dejen de estudiar\"";
console.log(palabra16);

// Unicode \uxxxx
let palabra17 = "Superíndice 2 \u00b2";
console.log(palabra17);

let palabra18 = "Caracter del alfabeto árabe \u069c";
console.log(palabra18);
console.log("");
*/

// Métodos de strings
// .length -> Tamaño de una string (cantidad de caracteres)
let palabra = 'Hola';
console.log(palabra);

let size = palabra.length;
console.log(size);

let palabra2 = 'ABCDEFGHIJ';
console.log(palabra2);
console.log(palabra2.length);

// Los espacios cuentan como caracteres
let palabra3 = "H o l a";
console.log(palabra3);
console.log(palabra3.length);

let palabra4 = " ";
console.log(palabra4);
console.log(palabra4.length);

// Indexar una string, acceder a sus índices
let palabra5 = 'América';
console.log(palabra5);

// <variable_string>[i] i -> numero entero
console.log(palabra5[0]);
console.log(palabra5[1]);
console.log(palabra5[4]);

// Inmutabilidad, no se pueden modificar los índices de una string
palabra5[0] = "E"; // Esto no funciona
console.log(palabra5);

// Última posición
console.log(palabra5.length);
// Contando
console.log(palabra5[6]);
// El último índice es el tamaño - 1
console.log(palabra5[palabra5.length - 1]);
console.log("");

// Métodos de case
// NO OLVIDAR LOS PARÉNTESIS
// .toUpperCase() -> Vuelve la string a mayúscula
let palabra6 = 'Probando .toUpperCase()';
console.log(palabra6);
console.log(palabra6.toUpperCase());

// .toLowerCase() -> Vuelve la string a minúscula
let palabra7 = 'Probando .toLowerCase()';
console.log(palabra7);
console.log(palabra7.toLowerCase());
console.log("");

// Substrings
let palabra8 = "Buenas noches a todas";
console.log(palabra8);

// .slice(start [, end])
console.log(palabra8.slice(7));
console.log(palabra8.slice(7, 13));

// .substr(start [, length])
console.log(palabra8.substr(7, 6));

// Búsqueda
console.log(palabra8[4]);
// .indexOf(caracter [, desde donde])
console.log(palabra8.indexOf('a'));
console.log(palabra8.indexOf('a', 16));
console.log("");

// .includes()
console.log(palabra8.includes("a"));
console.log(palabra8.includes("noches"));
console.log(palabra8.includes("Noches"));
console.log("");

// .startsWith()
console.log(palabra8.startsWith("Bu"));
console.log(palabra8.startsWith("tr"));
console.log("");

// .endsWith()
console.log(palabra8.endsWith("das"));
console.log(palabra8.endsWith("cd"));

// Función para sumar dos números
/* SINTÁXIS

funtion nombreDeLaFuncion(parametro 1, parametro2) {
    //Bloque de codigo de la funtion, indentado
    return valorDeRetorno;
}

- Plabra reservada function
- Nomre de la funtion, siguiendo las mismas reglas de las variables
- Parentesis de apertura y cierre obligatorios
- Si nuestra funtion recibe paramentros, los colocamos dentro de los
parentesis, separados por comas si hay más de uno
- Bloque de código a ejecutar de la funcion
- Es retorno si lo necesitan
- Cerrar llaves

*/

/*
// Función que reciba dos números y retorne la suma de los mismos
//Definición de la function
function sumar(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

// Llamar a la funcion
let respuesta = sumar(50, -11);
console.log(respuesta);
console.log(sumar(43, 11));

console.log("");

// Función que reciba dos números y retorne la resta de los mismos
function restar(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}

let resultadoResta = restar(20, 10);
console.log(resultadoResta);

console.log("");
console.log('Ejercicios con multiplicar y dividir')

//Ejercicios para multiplicar

function multiplicar(num1, num2) {
    let resultado = num1*num2;
    return resultado;
}

let resultadoMultiplicar = multiplicar(10, 10);
console.log(resultadoMultiplicar);

//Ejercicios para dividir

function dividir(num1, num2) {
    if (num2 != 0) {
        let resultado = num1/num2;
        return resultado;
    }

    return "Error: dividendo cero";
}

let resultadoDividir = dividir(20, 0);
console.log(resultadoDividir);

console.log("");
*/

// Arrow function: funcion de flechas

console.log('Ejercicios con Arrow');

//Sumar
let sumar = (num1, num2) => num1 + num2;

//Llamar a la función
let respuesta = sumar(30, 40);
console.log(respuesta);


//Restar
let restar = (num1, num2) => {
  let resultado = num1 - num2;
  return resultado;
};

//Llamar a la función
let respuestaResta = restar(30, 40);
console.log(respuestaResta);


//Multiplicar
let multiplicar = (num1, num2) => num1 * num2;

//Llamar a la función
let respuestaMultiplicar = multiplicar(30, 4);
console.log(respuestaMultiplicar);


//Dividir
let dividir = (num1, num2) => {
  if (num2 != 0) {
    let resultado = num1 / num2;
    return resultado;
  }

  return "Error: dividendo cero";
};

//Llamar a la función
let respuestaDividir = dividir(30, 3);
console.log(respuestaDividir);

console.log("");

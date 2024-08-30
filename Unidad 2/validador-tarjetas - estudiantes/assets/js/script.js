// VALIDADOS DE TARJETAS bancarias

function validarTarjeta() {
  //Nos aseguramos de que la alerta no sea visible antes de una nueva validación
  let alerta = document.getElementById("alerta");

  //Limpiamos el contenido
  alerta.innerText = "";

  //Limpiamos las clases
  alerta.className = "";

  let numero = document.getElementById("numero-tarjeta");
  //Obtenemos el valor inpt de la tarjeta
  let digitosTC = numero.value;

  //Validamos que el campo no esté vacio
  if (digitosTC.length == 0) {

    //Damos el estilo y contenido de inválido de la alerta
    alerta.innerText = "Tarjeta Inválida";
    alerta.className = "alerta-error";
    console.log("CERO");

    //Retomemos false porque no seria válido
    return false;
  }

  //Paso 1: Almacenar los dígitos en orden inverso
  //Almacenamos cada caracter de una string, como elemento array
  let arrTc = Array.from(digitosTC);
  //Invertimos el orden de los elementos del array
  let arrInverso = arrTc.reverse();
  console.log(arrTc);
  console.log(arrInverso);

  //Paso 2: Multiplicar por 2 los digitos en posición par (contando desde 1, no desde 0)
  //Declaramos nuestra variable auxiliar
  let digitoPar;

  //Recorremos el array inverso
  for (let i = 1; i <= arrInverso.length; i += 2) {

    //Convertimos el elemento (string) a number, para poder operarlo
    digitoPar = parseInt(arrInverso[i]);

    //Duplicamos el número
    digitoPar *= 2;

    //Si el número es mayor o igual a 10, sumamos los dígitos
    if (digitoPar >= 10) {

      //Para sumar los digitos, convertimos el númeroa string
      digitoPar = digitoPar.toString();

      // Sumamos los dígitos indexando la string y convirtiendo a number
      digitoPar = parseInt(digitoPar[0]) + parseInt(digitoPar[1]);
    }

    // Ahora reeemplazamos el número en la posición correspondiente
    arrInverso[i] = digitoPar.toString();

  }

  // Paso 3: Sumar todos los dígitos obtenidos en el paso anterior // Inicializamos la suma en 0 (operador neutro)
  let suma = 0;

  // Recorremos el array inverso y sumamos cada elemento
  for (let i = 0; i < arrInverso.length; i++) {

    // Sumamos el elemento convertido a number
    suma += parseInt(arrInverso[i]);

  }
  console.log(suma);


  // Paso 4: Validar si el número es múltiplo de 10
  if (suma % 10 == 0) {

    // Damos el estilo y contenido de válido a la alerta
    alerta.innerText = "Tarjeta Válida"; alerta.className = "alerta-valida";

    // Retornamos true porque sería válido
    return true;

  } else {
    // Damos el estilo y contenido de inválido a la alerta
    alerta.innerText = "Tarjeta Inválida";
    alerta.className = "alerta-error";
    console.log("NO DIVISIBLE POR 10");


    // Retornamos false porque no sería válido
    return false;
  }
}

// Enmascarar digitos
// Ocultaremos todos los dígitos de la tarjeta, excepto los últimos 4
function enmascarar() {
  let numero = document.getElementById("numero-tarjeta");
  // Obtenemos el valor del input de la tarjeta
  let digitosTC = numero.value;
  let cantidadDigitos = digitosTC.length;

  if (cantidadDigitos > 4) {
    let digitosEnmascarar = cantidadDigitos - 4;

    for (let i = 0; i < digitosEnmascarar; i++) {
      // Reemplazamos cada dígito por un asterisco
      digitosTC = digitosTC.replace(digitosTC[i], "*");
    }
  }
  document.getElementById("svgnumber").innerHTML = digitosTc;
}

// Vinculamos la función
document.getElementById("btn-validar").addEventListener("click", function () {
  // Validamos la tarjeta
  let valida = validarTarjeta();
  // Si es válida, enmascaramos los digitos
  if (valida) {
    enmascarar();
    // Limpiamos el input
    document.getElementById("numero-tarjeta").value = "";
    // Ocultamos el botón
    this.hidden = true;
  }
});

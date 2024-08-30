//Mini proyectito
let cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// Métodos de array
let btnPush = document.getElementById("btn-push");

// Asignamos la función al botón
btnPush.onclick = funcionPush;

function funcionPush() {
  // Actualizamos el array
  cars.push("Lexus");
  // Cargamos las imágenes nuevamente
  mostrarImagenes();
}

//Push
function funcionPop() {
  if (cars.Length > 0) {
    //Actualizamos el array
    cars.pop();
    //Cargamos las imágenes nuevamente
    mostrarImagenes();
  } else {
    alert("No se puede eliminar más elementos ya que el arreglo está vacío");
  }
}

// slice
let btnSlice = document.getElementById("btn-slice");
btnSlice.onclick = funcionSlice;

function funcionSlice() {
  let begin = document.getElementById("begin").value;
  let end = document.getElementById("end").value;

  // Nos preguntamos si no son strings vacías
  if (begin != "" && end != "") {
    // Actualizamos el array
    cars = cars.slice(begin, end);
    // Cargamos las imágenes nuevamente mostrar Imagenes();
  } else {
    alert("Los campos no pueden estar vacíos");
  }
}

// Esta funcion carga las imagenes en el elemento demo
function mostrarImagenes() {
  let text = "";

  for (let car of cars) {
    text += `<img src="./assets/img/${car}.png" alt="${car}" width="100">`;
  }
  document.getElementById("demo").innerHTML = text;
}

// Mostramos las imágenes al inicio
mostrarImagenes();

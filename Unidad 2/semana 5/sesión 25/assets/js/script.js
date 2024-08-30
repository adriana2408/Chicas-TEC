//EJEMPLO 1
function mostrarMenzaje() {
  //Mostramos los números del 1 al 10
  for (let i = 1; i <= 3; i++) {
    alert(i);
  }
}

//EJEMPLO 2
let texto = "";

//Obtenemos el conteo como texto HTML
for (let i = 1; i <= 10; i++) {
  texto += `${i}<br />`;
}

//Asignamos el elemento
document.getElementById('demo').innerHTML = texto;

//EJEMPLO 3
//Limpiamos la variable texto
texto = "";
const autos = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// Acceder a los elementos de la lista mediante un bucle
for (let i = 0; i < autos.length; i++) {
  texto += `${autos[i]}<br />`;
}

//Asignamos al elemento
document.getElementById('autos').innerHTML = texto;

//EJEMPLO 4
//Limpiamos la variable texto
texto = "";

// Recorrer lista por índice
for (let auto of autos) {
  texto += `${auto}<br />`;
}

//Asignamos al elemento
document.getElementById('autos2').innerHTML = texto;

//Dar un mensaje de acuerdo al clima
//lluvioso, soleado, nublado

let clima = 'nublado';

console.log(clima);

switch (clima) {
  case 'lluvioso':
    console.log("Recueda llevar un paraguas.");
    // Acá puedo poner todo lo que necesito ejecutar
    break;
  case 'soleado':
    console.log('Viste ligero.');
    break;
  case 'nieve':
    console.log('Abrigate mucho.');
    break;
  case 'Huracan':
    console.log('Refujiarse.');
    break;
  case 'nublado':
    console.log('Sal a la calle.');
    break;
  default:
    console.log('Tipo de clima desconocido.');
    break;
}
console.log('Fin del condicional.');

/*
let clima = 'soleado';

console.log(clima);

if (clima == 'lluvioso') {
console.log("Recueda llevar un paraguas.");
} else if (clima == 'soleado') {
console.log('Viste ligero.');
} else if (clima == 'nublado') {
console.log('Sal a la calle.');
} else {
console.log('Tipo de clima desconocido.');
}
console.log('Fin del condicional.'); */

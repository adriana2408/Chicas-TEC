//Objetos literales
const persona = {
  nombre: "Christian",
  apellido: "Cueva",
  edad: 25,
  dni_cedula: "36489652455", // sanke_case
};

// Mostramos el objeto
console.log(persona);

// ACCEDER O MODIFICAR UN OBJETO
// objeto.clave = valor; Notación de punto
// objeto["clave"] = valor; Notación de corchetes

// Accedemos a una propiedad
//console.log(persona[0]); // Esto da undefined
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

// Agregar propiedades
persona.correo = "christiancueva@correo.com";
// Mostramos el objeto
console.log(persona);

// Modificar propiedades
persona.correo = "christiandomínguez36@correo.com";
// Mostramos el objeto
console.log(persona);

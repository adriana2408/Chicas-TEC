function obtenerDatos() {

  // Guardamos en variables los datos del formulario
  let nombres = document.getElementById("nombres").value; let apellidos = document.getElementById("apellidos").value; let correo = document.getElementById("email").value;
  let fechaNacimiento = document.getElementById("fecha-nacimiento").value; let masculino = document.getElementById("masc").checked; let femenino = document.getElementById("fem").checked; let estatura = document.getElementById("estatura").value; let peso = document.getElementById("peso").value;
  let deporte = document.getElementById("deporte").checked;

  // Creamos el mensaje
  let mensaje = "DATOS OBTENIDOS\n"
    + "\nNombres:" + nombres.toUpperCase()
    + "\nApellidos: " + apellidos.toLowerCase()
    + "\nCorreo: " + correo
    + "\nFecha Nac.: " + fechaNacimiento
    + "\nMasculino: " + masculino
    + "\nFemenino: " + femenino
    + "\nEstatura: " + estatura + " m."
    + "\nPeso: " + peso + "kg."
    + "\n¿Practica algún deporte? " + deporte
  // Mostramos el mensaje
  console.log(mensaje);
}
/*IMPORTANTE

PARA LOS RADIO Y CHECKBOX PONGO .checked en lugar de .value */

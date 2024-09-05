$(document).ready(function () {
  // Acá colocaremos nuestro código
  // Sintaxis de jQuery
  // $(selector).accion();
  // Con JS
  document.querySelector("title").innerHTML = "DOM con JS";
  // con jQuery
  $("·title").html("DOM con jQuery");

  // Seleccionar por clase
  $(".demo").html("Clse seleccionada");
  $("Demo").first().html("Primer elemento de la clase");

  //Seleccionar elemento y cambiar un atributo
  $("img").attr(
    "src",
    "https://i.pinimg.com/236x/d3/95/7d/d3957d9f2da2d64140d70e799352322c.jpg"
  );

  $("img").attr("title", "Un michi");

  // Evento de click
  $("·btn").click(function () {
    $("·resultado").toggle();
  });
});

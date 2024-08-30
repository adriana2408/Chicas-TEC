console.log(document);

// Obtenemos nuestro h1
// let title = document.children[0].children[1].children[0];

// FORMAS DE SELECCIONAR ELEMENTOS DEL DOM
// ID
let title = document.getElementById("title");
console.log(title);

// CLASE
let items = document.getElementsByClassName("item");
console.log(items);

console.log("\nSELECTOR CSS");
// SELECTOR CSS
let elemento = document.querySelector("#title");
console.log(elemento);

// querySelector me devuelve el primer elemento
let item = document.querySelector(".item");
console.log(item);

let all_items = document.querySelectorAll(".item");
console.log(all_items);

let anchors = document.querySelectorAll("a");
console.log(anchors);

// Mostramos su innerHTML
// console.log(title.innerHTML);

// Modificar su innerHTML
title.innerHTML = "Manejo del DOM";

// Comentario de una línea

/*
Comentario
de muchas
líneas
*/

console.log(document);

let title = document.getElementById("title");
console.log(title);

let items = document.getElementsByClassName("item");
console.log(items);

console.log("\nSELECTOR CSS");

let elemento = document.querySelector("#title");
console.log(elemento);

let item = document.querySelector(".item");
console.log(item);

let all_items = document.querySelectorAll(".item");
console.log(all_items);

let anchors = document.querySelectorAll("a");
console.log(anchors);

title.innerHTML = "Manejo del DOM";

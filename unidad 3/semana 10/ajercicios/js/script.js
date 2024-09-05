const libro = {
  titulo: "Lascivia",
  paginas: 432,
  generos: ["Romance", "Drama", "Darck romance 🫦😻😼"],
  autor: {
    nombre: "Eva Muñoz",
    nacionalidad: "Colombia"
  },
  ediciones: [
    {
      año: 2019,
      editorial: "Ediciones B"
    },
    {
      año: 2021,
      editorial: "Planeta"
    }
  ]
};

console.log(libro.titulo);
console.log(libro.paginas);
console.log(libro.generos[0]);
console.log(libro.autor.nombre);

libro.autor.nombre = "Eva Muñoz";
libro.ediciones[1].editorial = "Penguin Random House";

console.log(libro);

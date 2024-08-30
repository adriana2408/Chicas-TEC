/*
let nums = [1, 2, 3, 4, 5];

console.log(nums);

nums.push(6);
console.log(nums);
nums.push("Help");
console.log(nums);

console.log("pop")
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

console.log("unshift");
nums.unshift(0);
console.log(nums);

console.log("shift");
nums.shift();
console.log(nums);

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Crear una copia del array desde el indice de inicio al fin

console.log("slice");
let subnums1 = nums.slice(0, 3);

console.log(subnums1);
console.log(nums);

// Ejercicio
//crear un subarray [3, 4, 5, 6] apartir de nums
let subarray = nums.slice(2, 6);
console.log(subarray);

*/

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Valor de inicio
console.log("Solo valor de inicio");
let subarr1 = nums.splice(2);
console.log(subarr1);
console.log(nums);

// Reasigno el array
console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// Ahora eliminando elementos
console.log("Eliminando elementos");

// Se queda con dos elemntos del subarray
let subarr2 = nums.splice(2, 2);
console.log(subarr2);
console.log(nums);

// Reasigno el array
console.log("Reasignamos el array"); nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// Ahora eliminando elementos
console.log("Agregando elementos");

// Agrega elementos
let subarr3 = nums.splice(2, 4, "La la la");
console.log(subarr3);
console.log(nums);

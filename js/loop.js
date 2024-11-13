// loops.js

console.log(" 👉 ==== TABLEAU ORIGINAL ==== ");
const fruits = ["Pomme", "Banane", "Mangue", "Orange"];
console.log(fruits)

console.log("\n🔥 ==== Boucle for classique ==== 🔥");
/*
 * Boucle for
 * Utilisée pour itérer sur un ensemble de valeurs avec un index
 */
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}

console.log("\n🔥 ==== Boucle for...of ==== 🔥");
/*
 * Boucle for...of
 * Utilisée pour parcourir les éléments d'un tableau ou d'un objet itérable sans index
 */
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

console.log("\n🔥==== Boucle forEach ==== 🔥");
/*
 * forEach
 * Appelle une fonction pour chaque élément d'un tableau
 * Ne retourne rien
 */
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

console.log("\n🔥==== Boucle map ==== 🔥");
/*
 * map
 * Transforme chaque élément d'un tableau en appliquant une fonction
 * Retourne un nouveau tableau avec les éléments transformés
 */
const fruitLengths = fruits.map(fruit => fruit.length);
console.log("Longueur des fruits:", fruitLengths);

console.log("\n🔥==== Boucle filter ==== 🔥");
/*
 * filter
 * Crée un nouveau tableau avec uniquement les éléments qui satisfont une condition
 */
const fruitsWithMoreThanFiveChars = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits avec plus de 5 caractères:", fruitsWithMoreThanFiveChars);

console.log("\n🔥==== Boucle while ==== 🔥");
/*
 * Boucle while
 * Exécute un bloc de code tant qu'une condition est vraie
 */
let count = 0;
while (count < 3) {
  console.log(`Count (while): ${count}`);
  count++;
}

console.log("\n🔥==== Boucle do...while ==== 🔥");
/*
 * Boucle do...while
 * Exécute un bloc de code au moins une fois, puis continue tant qu'une condition est vraie
 */
count = 0;
do {
  console.log(`Count (do...while): ${count}`);
  count++;
} while (count < 3);

console.log("\n🔥==== Boucle for...in ==== 🔥");
/*
 * Boucle for...in
 * Utilisée pour parcourir les propriétés d'un objet
 * Pas recommandée pour les tableaux
 */
const person = { name: "Alice", age: 25, city: "Paris" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log("\n🔥==== Boucle some ==== 🔥");
/*
 * some
 * Teste si au moins un élément du tableau satisfait une condition
 * Retourne true si un élément satisfait la condition, sinon false
 */
const hasShortFruit = fruits.some(fruit => fruit.length <= 5);
console.log("Y a-t-il un fruit avec une longueur <= 5 ? ", hasShortFruit);

console.log("\n🔥==== Boucle every ==== 🔥");
/*
 * every
 * Teste si tous les éléments d'un tableau satisfont une condition
 * Retourne true si tous les éléments satisfont la condition, sinon false
 */
const allLongFruits = fruits.every(fruit => fruit.length >= 5);
console.log("Tous les fruits ont-ils une longueur >= 5 ? ", allLongFruits);

console.log("\n🔥==== Boucle find ==== 🔥");
/*
 * find
 * Retourne le premier élément d'un tableau qui satisfait une condition
 * Retourne undefined si aucun élément ne correspond
 */
const longFruit = fruits.find(fruit => fruit.length > 6);
console.log("Premier fruit avec une longueur > 6: ", longFruit);

console.log("\n🔥==== Boucle findIndex ==== 🔥");
/*
 * findIndex
 * Retourne l'index du premier élément qui satisfait une condition
 * Retourne -1 si aucun élément ne correspond
 */
const longFruitIndex = fruits.findIndex(fruit => fruit.length > 6);
console.log("Index du premier fruit avec une longueur > 6: ", longFruitIndex);

console.log("\n🔥==== Boucle reduce ====");
/*
 * reduce
 * Applique une fonction cumulatrice à chaque élément du tableau pour réduire le tableau à une valeur unique
 */
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Somme des nombres:", sum);

// spread_rest.js

console.log(" 👉 ==== Spread Operator (Opérateur de décomposition) ====");
/*
 * L'opérateur de décomposition (spread operator) est représenté par `...`.
 * Il est utilisé pour étaler (ou décomposer) les éléments d'un tableau ou les propriétés d'un objet.
 * Très utile pour copier, fusionner des tableaux et objets, ou passer des arguments à une fonction.
 */

// Exemple 1 : Décomposition d'un tableau
// Ajoute tous les éléments du tableau `fruits` dans le tableau `moreFruits`
const fruits = ["Pomme", "Banane", "Mangue"];
const moreFruits = ["Orange", "Ananas", ...fruits];
console.log(" \n Tableau décomposé avec spread operator:", moreFruits);
// Résultat : ["Orange", "Ananas", "Pomme", "Banane", "Mangue"]

// Exemple 2 : Décomposition d'un objet
// Copie toutes les propriétés de `person` dans `personWithCity`, puis ajoute `city: "Paris"`
const person = { name: "Alice", age: 25 };
const personWithCity = { ...person, city: "Paris" };
console.log(" \n Objet décomposé avec spread operator:", personWithCity);
// Résultat : { name: "Alice", age: 25, city: "Paris" }

// Exemple 3 : Copie d'un tableau (sans lien avec l'original)
// Crée une copie indépendante du tableau `originalArray`
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(" Tableau original:", originalArray); // [1, 2, 3]
console.log(" \n Copie du tableau avec spread operator:", copiedArray); // [1, 2, 3, 4]

// Exemple 4 : Fusion d'objets
// Fusionne `defaultSettings` et `userSettings`, où `userSettings` écrase les propriétés de `defaultSettings`
const defaultSettings = { theme: "light", notifications: true };
const userSettings = { notifications: false };
const finalSettings = { ...defaultSettings, ...userSettings };
console.log("Fusion d'objets avec spread operator:", finalSettings);
// Résultat : { theme: "light", notifications: false }

console.log("\n 👉 ==== Rest Operator (Opérateur de regroupement) ====");
/*
 * L'opérateur de regroupement (rest operator) est également représenté par `...`.
 * Il est utilisé pour regrouper plusieurs éléments restants dans un tableau ou un objet.
 * Très utile pour capturer un nombre variable d'arguments dans une fonction ou pour extraire des éléments restants.
 */

// Exemple 5 : Paramètres de fonction avec rest operator
// `sum` accepte un nombre variable de paramètres et les additionne tous
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(" \n Somme avec rest operator:", sum(1, 2, 3, 4)); // Résultat : 10

// Exemple 6 : Rest operator pour regrouper des éléments restants dans un tableau
// `...otherFruits` capture tous les éléments restants après les deux premiers
const [firstFruit, secondFruit, ...otherFruits] = moreFruits;
console.log("Premier fruit:", firstFruit); // "Orange"
console.log("Deuxième fruit:", secondFruit); // "Ananas"
console.log(" \nAutres fruits avec rest operator:", otherFruits); // ["Pomme", "Banane", "Mangue"]

// Exemple 7 : Rest operator dans la décomposition d'un objet
// `...otherDetails` capture toutes les propriétés restantes après `name`
const { name, ...otherDetails } = personWithCity;
console.log("Nom:", name); // "Alice"
console.log(" \nAutres détails avec rest operator:", otherDetails); // { age: 25, city: "Paris" }

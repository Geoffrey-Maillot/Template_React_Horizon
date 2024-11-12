import { useState } from "react";

// Hook personnalisé d'incrémentation
// Il prend deux paramètre:
// - La valeur initiale que l'on veut donner au state
// - Le pas de l'incrémentation
// - Les paramètres ne sont pas forcément nécessaire à un hook personnalisé, =>
// => mais permettent de le rendre personalisable entre différent composant qui =>
// => l'appellerai
export const useIncrement = (initialValue, step) => {
  const [count, setCount] = useState(initialValue);

  // Fonction setter
  const increment = () => {
    setCount((c) => c + step);
  };
  // Je renvoie un tableau avec en paramètre:
  // [0] : La valeur du state
  // [1] : Le fonction qui modifie le state
  return [count, increment];
};

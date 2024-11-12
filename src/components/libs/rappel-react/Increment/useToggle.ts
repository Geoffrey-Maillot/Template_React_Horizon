import { useState } from "react";

// Hook personnalisé qui renvoie true ou false
// La hook n'est pas gros mais cela permet deux choses:
// - Le composant est plus propre (juste ce hook perso a appellé)
// - Je peu paramétré ma valeur initiale. Ici ma valeur initiale est à true, =>
// => mais je peu très bien utilisé ce hook personnalisé ailleurs en inititialisant =>
// => la valeur initiale à false
export const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((v) => !v);
  };

  return [value, toggle];
};

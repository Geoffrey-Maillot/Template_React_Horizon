import { useEffect } from "react";
import { useIncrement } from "./useIncrement";

// Hook personnalisé qui auto incrémente
export const useAutoIncrement = (initialValue = 0, step = 1) => {
  // Un hook personnalisé qui increment existe déjà, =>
  // => je peu très l'utiliser dans un autre hook personnalisé.
  const [count, increment] = useIncrement(initialValue, step);

  // Je lance un setInterval dans un useEffect pour qu'il se lance des que j'appelle le hook
  useEffect(() => {
    const autoIncrement = window.setInterval(() => {
      // J'utilise le setter du hook personnalisé
      increment();
    }, 1000);

    // Je nettoie l'interval au démontage du composant
    return () => window.clearInterval(autoIncrement);
  }, []);

  // Ici je retourne seulement la valeur du state, =>
  // =>  l'incrementation se lance toute seul grâce au useEffect
  return count;
};

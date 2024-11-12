// J'importe mes hook perso
import { useIncrement } from "./useIncrement.ts";
import { useAutoIncrement } from "./useAutoIncrement.ts";
import { useToggle } from "./useToggle.ts";

const Compteur = ({ initialValue, step }) => {
  // J'utilise mes hook perso
  // Toute la logique est déporté dans le hook perso ce qui rend le composant clair
  const [countM, increment] = useIncrement(initialValue, step);

  // Ce hook ne renvoie que le state, en l'appelant, =>
  // => le useEffect qui s'y trouve lance l'interval
  const countA = useAutoIncrement(initialValue, step);

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
      <button onClick={increment}>Incrémenter</button>

      <div> Compteur manuel : {countM}</div>
      <div> Compteur Auto : {countA}</div>
    </div>
  );
};

export const Increment = () => {
  const [compteurVisible, toggleCompteur] = useToggle(true);

  return (
    <div>
      Afficher le compteur
      <input
        type="checkbox"
        onChange={toggleCompteur}
        checked={compteurVisible}
      />
      {/* Mes hook perso étant paramétrable, je peu modifier la valeur des paramètres =>
         => qu'ils recevront*/}
      {compteurVisible && <Compteur initialValue={0} step={10} />}
      {compteurVisible && <Compteur initialValue={0} step={5} />}
    </div>
  );
};

// Un hook perso est une fonction qui utilise les hook de React
// Par convention on doit l'appeller 'useMaFonction'
// Elle peu recevoir des paramètres
// Elle renvoie toujours en 1er paramètre la valeur du state
// Et en 2nd la fonction qui set le useState
// Si il n'y a pas de setter par exemple dans le cas ou le state est modifié dans =>
// => un useEffect, on peu retourner seulement la valeur du state.

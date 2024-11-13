// File: LifecycleDemo.js

import { useState, useEffect } from "react";

export const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 1. Effet de montage et de démontage
  // Cet effet s'exécute une seule fois lorsque le composant est monté grâce au tableau de dépendances vide [].
  // Il affiche un message dans la console lors du montage et retourne une fonction de nettoyage qui s'exécute au démontage.
  useEffect(() => {
    console.log("1️⃣ => Le composant est monté."); // Lors du montage

    // Fonction de nettoyage qui s'exécute au démontage
    return () => {
      console.log("5️⃣ => Le composant est démonté."); // Lors du démontage
    };
  }, []);

  // 2. Effet qui s'exécute lorsque `count` change
  // Ce useEffect surveille `count` et s'exécute chaque fois que `count` est mis à jour.
  // C'est idéal pour gérer des effets de côté dépendant d'une valeur spécifique.
  useEffect(() => {
    console.log("2️⃣ => Le compteur a changé:", count);
  }, [count]); // Dépendance sur `count`

  // 3. Effet qui s'exécute lorsque `text` change
  // Cet effet est similaire au précédent, mais surveille le changement de `text`.
  // Il se déclenche lors de la première exécution et chaque fois que `text` est modifié.
  useEffect(() => {
    console.log("3️⃣ => Le texte a changé:", text);
  }, [text]); // Dépendance sur `text`

  // 4. Effet sans dépendances - s'exécute à chaque rendu
  // Sans tableau de dépendances, cet effet se déclenche à chaque fois que le composant est rendu ou re-rendu.
  // C'est utile dans de rares cas où l'on veut logguer chaque rendu ou effectuer une action à chaque rendu.
  useEffect(() => {
    console.log("4️⃣ => Un rendu a eu lieu.");
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1>Cycle de vie d'un composant React</h1>
      <section style={sectionStyle}>
        <h2>Montage et Démontage</h2>
        <p>
          Ce composant affiche un message dans la console lors de son{" "}
          <strong>montage</strong> et de son <strong>démontage</strong>.
          Vérifiez la console pour observer ces messages.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Mise à jour avec `count`</h2>
        <p>
          Chaque changement de la variable <strong>count</strong> déclenche
          l'exécution de l'effet associé, en affichant un message dans la
          console.
        </p>
        <p>Compteur actuel : {count}</p>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          Incrémenter
        </button>
      </section>

      <section style={sectionStyle}>
        <h2>Mise à jour avec `text`</h2>
        <p>
          Chaque changement de la variable <strong>text</strong> déclenche
          l'exécution de l'effet associé, qui enregistre la nouvelle valeur de{" "}
          <strong>text</strong> dans la console.
        </p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginTop: "10px",
          }}
          placeholder="Tapez quelque chose..."
        />
      </section>
    </div>
  );
};

// Styles
const sectionStyle = {
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "8px",
  backgroundColor: "#f7f7f7",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  padding: "8px 16px",
  fontSize: "0.9em",
  color: "white",
  backgroundColor: "#4CAF50",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

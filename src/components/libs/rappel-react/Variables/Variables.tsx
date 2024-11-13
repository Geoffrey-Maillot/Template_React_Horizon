// File: VariableStorageExplanation.js

import { useState, useRef } from "react";

export const Variables = () => {
  // Constante redéfinie à chaque rendu
  const renderCountConst = Math.floor(Math.random() * 100); // Valeur aléatoire pour illustrer la redéfinition

  // Variable d'état avec `useState` - modifiable et déclenche un re-rendu
  const [stateVariable, setStateVariable] = useState(
    "Je suis une variable d'état.",
  );

  // Variable de référence avec `useRef` - persiste sans re-rendu
  const refVariable = useRef("Je suis une référence persistante.");
  const refCounter = useRef(0); // Compteur qui persiste sans déclencher de re-rendu

  // Compteur de re-rendu du composant pour démontrer les re-rendus
  const [renderCount, setRenderCount] = useState(1);

  // Incrémenter la variable d'état pour démontrer le re-rendu
  const handleStateChange = () => {
    setStateVariable((prev) => prev + " (modifiée)");
    setRenderCount((prev) => prev + 1); // Mise à jour du compteur de re-rendu
  };

  // Modifier la valeur de la référence sans re-rendu
  const handleRefChange = () => {
    refVariable.current = refVariable.current + " (modifiée)";
    refCounter.current += 1; // Incrémente le compteur de référence
  };

  // Forcer le re-rendu pour voir la persistance de `ref`
  const forceRerender = () => {
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>
        Moyens de stocker une variable en React
      </h1>

      <p style={{ textAlign: "center", fontSize: "1.1em" }}>
        <strong>Nombre de re-rendus du composant</strong> : {renderCount}
      </p>

      <section style={sectionStyle}>
        <h2 style={headerStyle}>1. Const / Let</h2>
        <p>
          <strong>const</strong> et <strong>let</strong> sont utilisés pour
          déclarer des variables JavaScript standard.
        </p>
        <div style={exampleStyle}>
          <strong>Valeur de const à chaque rendu</strong> : {renderCountConst}
          <br />
          (La valeur change à chaque rendu car `const` est recréée)
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headerStyle}>2. State (useState)</h2>
        <p>
          <strong>state</strong> est utilisé pour gérer des données dynamiques
          et déclenche un re-rendu du composant lorsqu'il change.
        </p>
        <div style={exampleStyle}>
          <strong>Exemple de state</strong> : {stateVariable}
        </div>
        <button style={buttonStyle} onClick={handleStateChange}>
          Changer la variable d'état
        </button>
      </section>

      <section style={sectionStyle}>
        <h2 style={headerStyle}>3. Ref (useRef)</h2>
        <p>
          <strong>ref</strong> persiste entre les rendus sans déclencher de
          re-rendu lorsqu'elle change.
        </p>
        <div style={exampleStyle}>
          <strong>Valeur de ref</strong> : {refVariable.current}
          <br />
          <strong>Compteur ref (persiste entre rendus)</strong> :{" "}
          {refCounter.current}
          <br />
          (La valeur de `ref` et le compteur persistent entre les rendus)
        </div>
        <button style={buttonStyle} onClick={handleRefChange}>
          Changer la référence
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: "#FF9800",
            marginLeft: "10px",
          }}
          onClick={forceRerender}
        >
          Forcer le re-rendu pour voir la référence modifiée
        </button>
      </section>
    </div>
  );
};

// Styles utilisés
const sectionStyle = {
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "8px",
  backgroundColor: "#f7f7f7",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
  color: "#4CAF50",
  marginBottom: "10px",
};

const exampleStyle = {
  padding: "10px",
  backgroundColor: "#e8f5e9",
  borderRadius: "5px",
  fontSize: "1em",
  color: "#388E3C",
  marginBottom: "10px",
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

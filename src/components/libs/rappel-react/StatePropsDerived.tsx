// File: StatePropsDerivedExample.js

import { useState, useMemo, useRef } from "react";

// Composant enfant qui utilise les props
const ChildComponent = ({ propValue }) => {
  // Utilisation de useRef pour conserver un compteur de re-rendu persistant
  const renderCount = useRef(0);
  renderCount.current += 1; // Incrémentation du compteur à chaque re-rendu

  console.log("ChildComponent re-rendered"); // Affiche un message à chaque re-rendu

  return (
    <div style={childStyle}>
      <h3>Composant Enfant : ChildComponent</h3>
      <p>
        <strong>Valeur de la prop :</strong> {propValue}
      </p>
      <p>
        <strong>Nombre de re-rendus :</strong> {renderCount.current}
      </p>
      <p>
        Ce composant enfant est re-rendu chaque fois que le composant parent est
        re-rendu, même si son propre état ou ses props n'ont pas changé.
      </p>
    </div>
  );
};

// Composant enfant qui utilise un état dérivé
const DerivedStateComponent = ({ baseValue }) => {
  // Utilisation de useRef pour conserver un compteur de re-rendu persistant
  const renderCount = useRef(0);
  renderCount.current += 1; // Incrémentation du compteur à chaque re-rendu

  console.log("DerivedStateComponent re-rendered"); // Affiche un message à chaque re-rendu

  // derivedValue est basé sur baseValue il sera donc redéfinis à chaque fois que baseValue change
  const derivedValue = baseValue * 2;

  return (
    <div style={childStyle}>
      <h3>Composant Enfant : DerivedStateComponent</h3>
      <p>
        <strong>État dérivé (baseValue * 2) :</strong> {derivedValue}
      </p>
      <p>
        <strong>Nombre de re-rendus :</strong> {renderCount.current}
      </p>
      <p>
        Ce composant utilise un état dérivé basé sur les props, mais il est
        également re-rendu chaque fois que le parent est re-rendu.
      </p>
    </div>
  );
};

// Composant parent
export const StatePropsDerived = () => {
  // Déclaration de l'état local `count`, modifiable par l'utilisateur
  const [count, setCount] = useState(0);

  // Autre état local `text` pour démontrer le re-rendering des enfants sans changement dans leurs props ou état dérivé
  const [text, setText] = useState("");

  // Fonction pour incrémenter le compteur, illustrant l'utilisation du state
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={containerStyle}>
      <h1>Illustration : State, Props, et État Dérivé</h1>

      <section style={sectionStyle}>
        <h2>1. State (État Local)</h2>
        <p>
          Ce compteur est un <strong>état local</strong> dans le composant
          parent. Modifier cet état entraîne un re-rendu du composant parent.
        </p>
        <p>
          <strong>Compteur actuel :</strong> {count}
        </p>
        <button style={buttonStyle} onClick={incrementCount}>
          Incrémenter le compteur
        </button>
      </section>

      <section style={sectionStyle}>
        <h2>2. Props (Valeur de State passée à un Enfant)</h2>
        <p>
          La valeur de <strong>count</strong> est passée en tant que{" "}
          <strong>prop</strong> à <em>ChildComponent</em>, un composant enfant.
          Chaque fois que <strong>count</strong> change, le composant parent est
          re-rendu, entraînant aussi un re-rendu de cet enfant, même si l'enfant
          ne modifie pas son propre état.
        </p>
        <ChildComponent propValue={count} />
      </section>

      <section style={sectionStyle}>
        <h2>3. État Dérivé dans un Composant Enfant</h2>
        <p>
          L'état dérivé est calculé dans <em>DerivedStateComponent</em> en
          utilisant <strong>useMemo</strong>. Ce composant enfant se re-rendra
          si la prop <strong>baseValue</strong> change.
        </p>
        <DerivedStateComponent baseValue={count} />
      </section>

      <section style={sectionStyle}>
        <h2>4. Re-rendering avec Autre État Parent</h2>
        <p>
          Ce champ de texte modifie un autre <strong>state</strong> dans le
          composant parent. Même si cette mise à jour n'affecte ni les props ni
          les états dérivés des composants enfants, elle entraîne tout de même
          un re-rendu de tous les enfants.
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
const containerStyle = {
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "auto",
};

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

const childStyle = {
  padding: "10px",
  backgroundColor: "#e8f5e9",
  borderRadius: "5px",
  color: "#388E3C",
  marginTop: "10px",
};

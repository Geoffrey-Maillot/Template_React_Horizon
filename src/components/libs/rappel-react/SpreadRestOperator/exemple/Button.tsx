import { ComponentPropsWithoutRef } from "react";

/**
 * Parent component
 */
export const ParentButton = () => {
  const handleClick = () => {
    alert("Bouton cliqué");
  };

  return (
    <div>
      <h1>Utilisation du bouton</h1>
      <Button
        label="Cliquez-moi"
        onClick={handleClick}
        disabled={false}
        data-test-id="main-button"
      />
    </div>
  );
};

/**
 * Childen component
 */

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
}

const Button = ({ label, onClick, ...rest }: ButtonProps) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
    {...rest} // Applique toutes les autres props au bouton
  >
    {label}
  </button>
);

/**
 * EXPLICATION
 *
 * Rest Operator pour les Props Supplémentaires : ...rest capture toutes les props non spécifiées (comme disabled et data-test-id) et les applique directement à l’élément <button>.
 *
 * Avantage : Cela permet de rendre le composant Button plus flexible et de transmettre facilement des attributs additionnels sans modification de la structure.
 */

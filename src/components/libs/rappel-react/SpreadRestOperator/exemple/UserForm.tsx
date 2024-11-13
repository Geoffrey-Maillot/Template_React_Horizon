// UserForm.js
import { CSSProperties, useState } from "react";

export const UserForm = () => {
  const [user, setUser] = useState({ name: "", age: "", city: "" });

  // Mettre à jour le champ spécifique de l'utilisateur
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Met à jour uniquement la propriété modifiée
    }));
  };

  const styles: Record<string, CSSProperties> = {
    input: {
      background: "#fff",
      borderBottom: "1px solid #777",
      outline: "none",
      marginLeft: "12px",
    },
  };

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Formulaire Utilisateur</h2>
      <form style={{ marginBottom: "20px" }}>
        <label>
          Nom:
          <input
            style={styles.input}
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Âge:
          <input
            style={styles.input}
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ville:
          <input
            style={styles.input}
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </label>
      </form>

      <h3 style={{ fontWeight: "bold" }}>Informations Utilisateur:</h3>
      <p>Nom: {user.name}</p>
      <p>Âge: {user.age}</p>
      <p>Ville: {user.city}</p>
    </div>
  );
};

/**
 * EXPLICATION
 *
 * Spread Operator dans la Mise à Jour de l’État : Dans setUser, le spread operator (...prevUser) conserve les valeurs existantes de user. Seule la propriété modifiée (désignée par [name]: value) est mise à jour.
 *
 * Avantage : Utiliser le spread operator permet de manipuler facilement des états complexes sans écraser les propriétés existantes.
 */

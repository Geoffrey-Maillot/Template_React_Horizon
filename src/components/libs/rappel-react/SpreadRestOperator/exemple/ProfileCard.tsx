/**
 * Parent component
 */

export const ParentProfileCard = () => {
  const user = { name: "Alice", age: 30, city: "Paris" };

  return (
    <div>
      <h1>Profil Utilisateur</h1>
      {/* Utilise spread pour transmettre `user` et des props supplémentaires */}
      <ProfileCard
        user={{ ...user }}
        data-testid="profile-card"
        title="Carte de Profil"
      />
    </div>
  );
};

/**
 * Childen component
 */
const ProfileCard = ({ user, ...rest }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      width: "250px",
      backgroundColor: "#f9f9f9",
    }}
    {...rest} // Applique les props supplémentaires
  >
    <h2>{user.name}</h2>
    <p>Âge: {user.age}</p>
    <p>Ville: {user.city}</p>
  </div>
);

/**
 * EXPLICATION
 *
 * Rest Operator : ...rest capture les props supplémentaires (data-testid, title) et les applique à la carte de profil.
 *
 * Spread Operator pour les Props Utilisateur : Dans le composant parent, {...user} transmet chaque propriété de user en tant que prop individuelle.
 *
 * Avantage : Ce composant est flexible et peut accepter un nombre illimité de props supplémentaires tout en utilisant les données de l'objet user directement.
 */

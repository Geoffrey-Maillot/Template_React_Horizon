/**
 * Parent component
 */
export const ParentUserCard = () => {
  const user = { name: "Alice", age: 30, city: "Paris" };

  return (
    <div>
      <h1>Informations sur l'utilisateur</h1>
      {/* Transmettre toutes les props de `user` à `UserCard` */}
      <UserCard {...user} />
    </div>
  );
};

/**
 * Childen component
 */

interface UserCardProps {
  name: string;
  age: number;
  city?: string;
}
const UserCard = ({ name, age, city }: UserCardProps) => (
  <div
    style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}
  >
    <h2>{name}</h2>
    <p>Âge: {age}</p>
    <p>Ville: {city}</p>
  </div>
);

/**
 * EXPLICATION
 *
 * Spread Operator dans les Props : Le spread operator (...user) transmet toutes les propriétés de l'objet user au composant UserCard comme des props individuelles (name, age, et city).
 *
 * Avantage : Cela permet de passer facilement un ensemble de propriétés sans devoir les spécifier une par une.
 */

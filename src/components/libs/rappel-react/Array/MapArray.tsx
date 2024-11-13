import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  onSale: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, onSale: true },
  { id: 2, name: "Smartphone", price: 800, onSale: false },
  { id: 3, name: "Headphones", price: 150, onSale: true },
  { id: 4, name: "Tablet", price: 300, onSale: false },
];

// Composant ProductList
export const MapArray = () => {
  const discountRate = 0.2; // 20% de réduction

  // Transforme les produits en appliquant une réduction si onSale est true
  const transformedProducts = products.map((product) => {
    const discountedPrice = product.onSale
      ? product.price - product.price * discountRate
      : product.price;

    return {
      ...product,
      discountedPrice, // ajoute le prix réduit si applicable
    };
  });

  // Styles pour le composant
  const styles = {
    container: {
      display: "flex",
      gap: "40px",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    listContainer: {
      flex: 1,
    },
    title: {
      textAlign: "center" as const,
      color: "#333",
      marginBottom: "10px",
    },
    productItem: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      marginBottom: "8px",
    },
    originalPrice: {
      textDecoration: "line-through",
      color: "red",
      marginRight: "8px",
    },
    discountedPrice: {
      color: "green",
      fontWeight: "bold",
    },
    regularPrice: {
      color: "#333",
    },
    saleBadge: {
      backgroundColor: "#FF9800",
      color: "white",
      padding: "2px 6px",
      borderRadius: "4px",
      marginLeft: "8px",
      fontSize: "12px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Affichage de la liste originale */}
      <div style={styles.listContainer}>
        <h2 style={styles.title}>Prix Original</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} style={styles.productItem}>
              <h3>
                {product.name}{" "}
                {product.onSale && <span style={styles.saleBadge}>Promo</span>}
              </h3>
              <p style={styles.regularPrice}>${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Affichage de la liste transformée avec les réductions */}
      <div style={styles.listContainer}>
        <h2 style={styles.title}>Prix avec Réduction</h2>
        <ul>
          {transformedProducts.map((product) => (
            <li key={product.id} style={styles.productItem}>
              <h3>
                {product.name}{" "}
                {product.onSale && <span style={styles.saleBadge}>Promo</span>}
              </h3>
              <p>
                {product.onSale ? (
                  <>
                    <span style={styles.originalPrice}>
                      ${product.price.toFixed(2)}
                    </span>
                    <span style={styles.discountedPrice}>
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span style={styles.regularPrice}>
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

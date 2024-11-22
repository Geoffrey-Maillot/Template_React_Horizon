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

export const FilterArray = () => {
  // Filtre les produits pour ne garder que ceux en promotion (onSale: true)
  const onSaleProducts = products.filter((product) => product.onSale);

  return (
    <div style={styles.container}>
      {/* Liste complète des produits */}
      <div style={styles.listContainer}>
        <h2 style={styles.title}>Tous les Produits</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} style={styles.productItem}>
              <h3>
                {product.name}{" "}
                {product.onSale && <span style={styles.saleBadge}>Promo</span>}
              </h3>
              <p style={styles.price}>${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Liste des produits en promotion seulement */}
      <div style={styles.listContainer}>
        <h2 style={styles.title}>Produits en Promotion</h2>
        <ul>
          {onSaleProducts.map((product) => (
            <li key={product.id} style={styles.productItem}>
              <h3>
                {product.name} <span style={styles.saleBadge}>Promo</span>
              </h3>
              <p style={styles.price}>${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * ======================
 *        STYLES
 * ======================
 */
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
  price: {
    color: "#333",
    fontWeight: "bold",
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

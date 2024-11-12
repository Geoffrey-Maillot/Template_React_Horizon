import { useState, CSSProperties } from "react";

export const Count = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Définition des styles en ligne
  const styles: { [key: string]: CSSProperties } = {
    app: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      marginTop: "50px",
    },
    title: {
      color: "#333",
    },
    counter: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginTop: "20px",
    },
    button: {
      background: "#EF4765",
      border: "none",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "24px",
      padding: "10px 20px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    disabledButton: {
      background: "#ccc",
      cursor: "not-allowed",
    },
    count: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Simple React Counter</h1>
      <div style={styles.counter}>
        <button
          style={
            count <= 0
              ? { ...styles.button, ...styles.disabledButton }
              : styles.button
          }
          onClick={decrement}
          disabled={count <= 0}
        >
          -
        </button>
        <span style={styles.count}>{count}</span>
        <button style={styles.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

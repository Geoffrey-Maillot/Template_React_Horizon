import { CSSProperties } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const HeaderRappelReact = () => {
  const style: Record<string, CSSProperties> = {
    header: {
      display: "flex",
      gap: "12px",
      padding: "16px 8px",
      borderBottom: "1px solid #333",
    },
    link: {
      background: "linear-gradient(to bottom right, #EF4765, #FF9A5A)",
      border: "0px",
      borderRadius: "12px",
      color: "#FFFFFF",
      cursor: "pointer",
      display: "inline-block",
      fontFamily:
        '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "2.5",
      outline: "transparent",
      padding: "0 1rem",
      textAlign: "center",
      textDecoration: "none",
      transition: "box-shadow .2s ease-in-out",
      userSelect: "none",
      touchAction: "manipulation",
      whiteSpace: "nowrap",
    },
  };

  return (
    <>
      <div style={style.header}>
        <Link style={style.link} to="/rappel/count">
          Count
        </Link>
        <Link style={style.link} to="/rappel/todo">
          Todo
        </Link>
        <Link style={style.link} to="/rappel/increment">
          Increment
        </Link>
        <Link style={style.link} to="/rappel/convertisseur">
          Convertiseur
        </Link>
      </div>
      <Outlet />;
    </>
  );
};

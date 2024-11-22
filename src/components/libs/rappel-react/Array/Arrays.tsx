import { Link } from "../Link";
import { CSSProperties } from "react";
import { Outlet } from "react-router";

export const Arrays = () => {
  return (
    <>
      <div style={style.title}>ARRAYS</div>
      <div style={style.links}>
        <Link to="/rappel/arrays/maparray" title="Map Array" />
        <Link to="/rappel/arrays/filterarray" title="Filter Array" />
      </div>
      <Outlet />
    </>
  );
};

/**
 * ======================
 *        STYLES
 * ======================
 */
const style: Record<string, CSSProperties> = {
  links: {
    display: "flex",
    gap: "12px",
    padding: "16px 8px",
    borderBottom: "1px solid #333",
  },
  title: {
    textAlign: "center",
    width: "100%",
    fontSize: "1.4rem",
    color: "#555",
  },
};

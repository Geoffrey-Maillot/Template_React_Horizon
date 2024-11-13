import { CSSProperties } from "react";
import { Outlet } from "react-router";
import { Link } from "./Link";

export const HeaderRappelReact = () => {
  const style: Record<string, CSSProperties> = {
    header: {
      display: "flex",
      gap: "12px",
      padding: "16px 8px",
      borderBottom: "1px solid #333",
    },
  };

  return (
    <>
      <div style={style.header}>
        <Link to="/rappel/count" title="Count" />
        <Link to="/rappel/variables" title="Variables" />
        <Link to="/rappel/livecycle" title="Live Cycle" />
        <Link to="/rappel/statepropsderived" title="State / Props / Derived" />
        <Link to="/rappel/spreadrest" title="Spread / Rest" />
        <Link to="/rappel/arrays" title="Arrays" />
        <Link to="/rappel/todo" title="Todo" />
        <Link to="/rappel/increment" title="Increment" />
        <Link to="/rappel/convertisseur" title="Convertiseur" />
      </div>
      <Outlet />;
    </>
  );
};

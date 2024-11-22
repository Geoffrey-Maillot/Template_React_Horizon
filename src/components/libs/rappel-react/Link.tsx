import { CSSProperties } from "react";
import { NavLink as OriginalLink, LinkProps } from "react-router-dom";

export const Link = ({ ...props }: LinkProps) => {
  const style: Record<string, CSSProperties> = {
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
    isActiveLink: {
      boxShadow: "0 0 0px 3px white ,0 0 0px 6px black",
    },
  };

  return (
    <OriginalLink
      style={({ isActive }) => {
        return isActive
          ? { ...style.link, ...style.isActiveLink }
          : { ...style.link };
      }}
      {...props}
    >
      {props.title}
    </OriginalLink>
  );
};

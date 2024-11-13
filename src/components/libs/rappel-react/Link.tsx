import { CSSProperties } from "react";
import { Link as OriginalLink, LinkProps } from "react-router-dom";

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
  };

  return (
    <OriginalLink style={style.link} {...props}>
      {props.title}
    </OriginalLink>
  );
};

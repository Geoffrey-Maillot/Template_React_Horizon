import { CSSProperties } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Link as ButtonLink } from "./Link";
import { pathRappelReact, subjectRappel } from "@src/constant";

export const HeaderRappelReact = () => {
  const style: Record<string, CSSProperties> = {
    header: {
      display: "flex",
      gap: "12px",
      padding: "16px 8px",
    },

    info: {
      borderBottom: "1px solid #333",
      borderTop: "1px solid #333",
      width: "100%",
      maxWidth: "100%",
      paddingBlock: "12px",
    },
  };

  const location = useLocation();
  const lesson = location.pathname.split("/").at(-1);

  // path du fichier concerné par la leçon
  const path = pathRappelReact[lesson];

  // Sujet de la leçon
  const subject = subjectRappel[lesson];

  return (
    <div className="px-4">
      <div
        className="flex flex-wrap items-center justify-center"
        style={style.header}
      >
        <ButtonLink className="flex-grow" to="/rappel/count" title="Count" />{" "}
        <ButtonLink
          className="flex-grow"
          to="/rappel/variables"
          title="Variables"
        />
        <ButtonLink
          className="flex-grow"
          to="/rappel/livecycle"
          title="Live Cycle"
        />
        <ButtonLink
          className="flex-grow"
          to="/rappel/statepropsderived"
          title="State / Props / Derived"
        />
        <ButtonLink
          className="flex-grow"
          to="/rappel/countcustomhook"
          title="Count custom hook"
        />
        <ButtonLink
          className="flex-grow"
          to="/rappel/spreadrest"
          title="Spread / Rest"
        />
        <ButtonLink className="flex-grow" to="/rappel/arrays" title="Arrays" />
        <ButtonLink className="flex-grow" to="/rappel/todo" title="Todo" />
        <ButtonLink
          className="flex-grow"
          to="/rappel/increment"
          title="Increment"
        />
        <ButtonLink
          className="flex-grow"
          to="/rappel/convertisseur"
          title="Convertiseur"
        />
      </div>
      <div className="prose" style={style.info}>
        <Link className="text-blue-600" to="/">
          Retour{" "}
        </Link>
        {path && (
          <>
            <p className="my-1 text-black">
              Path du fichier avec commentaire :{" "}
              <span className="text-blue-600">{`${path}`}</span>
            </p>
            <p className="my-1 text-black">
              Sujet : <span className="text-blue-600">{`${subject}`}</span>
            </p>
          </>
        )}
      </div>
      <Outlet />;
    </div>
  );
};

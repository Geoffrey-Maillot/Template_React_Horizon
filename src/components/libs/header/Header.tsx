import clsx from "clsx";
import { Dropdown } from "primereact/dropdown";
import { useLoggedUser } from "@src/context/libs/contextUser";
import { Button } from "primereact/button";
import { useState } from "react";

import logo from "@src/assets/img/fidéciel.svg";
import { Link } from "react-router-dom";

export function Header() {
  const { logIn, logOut, loggedUser } = useLoggedUser();
  const [user, setUser] = useState();

  return (
    <header
      className={clsx(
        "flex items-center justify-between gap-9",
        "h-[5.1rem] w-full p-4",
      )}
    >
      <div className="prose flex items-center gap-2">
        <img src={logo} alt="logo fidéciel" className="m-0 h-10 w-10" />
        <Link className="text-blue-600" to="/">
          Retour{" "}
        </Link>
      </div>

      <div className={clsx("flex items-center gap-4")}>
        {loggedUser ? (
          <div className={clsx("flex items-center  justify-center gap-4")}>
            <div className="h-8 w-8 overflow-hidden  rounded-full">
              <img
                className="object-fit w-full object-center"
                src={`https://i.pravatar.cc/${+loggedUser.id + 200}`}
                alt="User"
                loading="lazy"
              />
            </div>
            <div className={clsx("font-bold text-slate-800")}>
              {loggedUser.username}
            </div>
          </div>
        ) : (
          <Dropdown
            options={optionsUser}
            value={user}
            optionLabel="username"
            onChange={(e) => setUser(e.value)}
            placeholder="Se connecter"
            className="w-44"
          />
        )}
        {loggedUser ? (
          <Button label="Log out" onClick={logOut} severity="danger" />
        ) : (
          <Button
            label="Log in"
            onClick={() => logIn(user)}
            severity="success"
          />
        )}
      </div>
    </header>
  );
}

const optionsUser = [
  {
    id: 1,
    username: "Bret",
  },
  {
    id: 2,
    username: "Antonette",
  },
  {
    id: 3,
    username: "Samantha",
  },
  {
    id: 4,
    username: "Karianne",
  },
  {
    id: 5,
    username: "Kamren",
  },
  {
    id: 6,
    username: "Leopoldo_Corkery",
  },
  {
    id: 7,
    username: "Elwyn.Skiles",
  },
  {
    id: 8,
    username: "Maxime_Nienow",
  },
  {
    id: 9,
    username: "Delphine",
  },
  {
    id: 10,
    username: "Moriah.Stanton",
  },
];

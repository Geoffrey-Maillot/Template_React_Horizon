import { User } from "@src/interface";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface UserLogged extends Pick<User, "username" | "id"> {}

const userContext = createContext<{
  loggedUser: UserLogged;
  logIn: (user: UserLogged) => void;
  logOut: () => void;
}>(null);

//Provider
const UserProvider = ({ children }: PropsWithChildren) => {
  const [loggedUser, setLoggedUser] = useState<UserLogged>();

  const logIn = (user: UserLogged) => {
    setLoggedUser(user);
  };

  const logOut = () => {
    setLoggedUser(null);
  };

  return (
    <userContext.Provider value={{ loggedUser, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
};

// Consumer
const useLoggedUser = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("useLoggedUser was used outside of its provider");
  }

  return context;
};

export { UserProvider, useLoggedUser };

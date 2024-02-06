import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Creation
const numberContext = createContext<{
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
}>({
  number: null,
  setNumber: () => {
    return;
  },
});

// Provider
const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  console.log(number);

  return (
    <numberContext.Provider value={{ number, setNumber }}>
      {children}
    </numberContext.Provider>
  );
};

const useNumberContext = () => {
  const context = useContext(numberContext);

  if (context === undefined) {
    throw new Error("useLoggedUser was used outside of its provider");
  }

  return context;
};

export { NumberProvider, useNumberContext };

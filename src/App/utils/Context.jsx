import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [inputVal, setInputVal] = useState("mojito");
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AppContext.Provider
      value={{ setInputVal, inputVal, isLoading, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);

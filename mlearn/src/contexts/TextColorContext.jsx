import { createContext, useContext } from "react";
const TextColorContext = createContext();
import { useLocation } from "react-router-dom";

export const useTextColor = () => useContext(TextColorContext);

export const TextColorProvider = ({ children }) => {
  const location = useLocation();
  const textColor = location.pathname === "/profile" ? "black" : "white";

  return (
    <TextColorContext.Provider value={textColor}>
      {children}
    </TextColorContext.Provider>
  );
};

import { TextColorProvider } from "./TextColorContext";

const AppProviders = ({ children }) => {
  return <TextColorProvider>{children}</TextColorProvider>;
};

export default AppProviders;

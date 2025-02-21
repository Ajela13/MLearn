import { TextColorProvider } from "./TextColorContext";
import { ModalProvider } from "./ModalContext";
import { PostProvider } from "./PostContext";
const AppProviders = ({ children }) => {
  return (
    <PostProvider>
      <ModalProvider>
        <TextColorProvider>{children}</TextColorProvider>;
      </ModalProvider>
    </PostProvider>
  );
};

export default AppProviders;

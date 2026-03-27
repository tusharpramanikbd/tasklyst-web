import { DateProvider } from "../contexts/DateContext";

const AppRoot = ({ children }: { children: React.ReactNode }) => {
  return <DateProvider>{children}</DateProvider>;
};

export default AppRoot;

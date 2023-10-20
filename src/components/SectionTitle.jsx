import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SectionTitle = ({ children }) => {
  const { darkTheme } = useContext(AuthContext);
  return (
    <h2
      className={`text-4xl mb-5 font-medium ${
        darkTheme ? "text-slate-400" : "text-slate-800"
      } block w-full text-left`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;

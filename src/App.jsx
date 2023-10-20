import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";

const App = () => {
  return (
    <>
      <div className="relative z-[9999]">
        <Toaster />
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

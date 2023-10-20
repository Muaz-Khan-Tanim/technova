import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Footer = () => {
  const { darkTheme, user } = useContext(AuthContext);
  return (
    <footer
      className={`w-full py-9 px-3 border-t-2 border-slate-600 ${
        darkTheme ? "bg-base-100" : "bg-slate-200"
      }`}
    >
      <div className="contain grid md:grid-cols-3 gap-5">
        <div>
          <h2
            className={`text-4xl ${
              darkTheme ? "text-slate-400" : "text-slate-800"
            } font-semibold`}
          >
            Logo
          </h2>
        </div>
        <div>
          <h4
            className={`mb-2 text-xl font-semibold ${
              darkTheme ? "text-slate-300" : "text-slate-900"
            }`}
          >
            Pages
          </h4>
          <div
            className={`text-lg ${
              darkTheme ? "text-slate-400" : "text-slate-800"
            } flex flex-col items-start gap-1`}
          >
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/add-product">Add Product</Link>
          </div>
        </div>
        <div>
          <h4
            className={`mb-2 text-xl font-semibold ${
              darkTheme ? "text-slate-300" : "text-slate-900"
            }`}
          >
            Admin
          </h4>
          {user ? (
            <div
              className={`text-lg ${
                darkTheme ? "text-slate-400" : "text-slate-800"
              } flex flex-col items-start gap-1`}
            >
              <Link to="/account">Account</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/add-product">Add a product</Link>
            </div>
          ) : (
            <div
              className={`w-full text-lg ${
                darkTheme ? "text-slate-400" : "text-slate-800"
              } flex flex-col items-start gap-1`}
            >
              <Link
                to="/login"
                className="w-full btn btn-outline flex items-center justify-center text-lg text-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full btn btn-outline flex items-center justify-center text-lg text-center"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

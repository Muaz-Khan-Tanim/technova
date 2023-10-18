import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const logout = () => {
    logoutUser();
  };

  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Add Product",
      path: "/add-product",
    },
  ];

  return (
    <div className="relative z-[999] shadow-lg">
      <div className="contain navbar bg-base-100 justify-between text-slate-400 text-2xl">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
          >
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <NavLink to={navlink.path}>{navlink.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex-none">
          <Link to="/" className="btn btn-ghost normal-case text-3xl">
            Logo
          </Link>
        </div>

        {/* Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <NavLink to={navlink.path}>{navlink.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="flex-none">
          {/* Cart Button */}
          <Link to="/cart" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* <span className="badge badge-sm indicator-item">8</span> */}
            </div>
          </Link>

          {user ? (
            /* Account */
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
              >
                <li>
                  <Link to="/account" className="justify-between">
                    Account
                    {/* <span className="badge">New</span> */}
                  </Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            /* Login Button */
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

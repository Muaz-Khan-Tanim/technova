import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);
  let location = useLocation();
  location = location.state || "/";

  const login = (e) => {
    e.preventDefault();
    setLoggingIn(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Logged in.");
        setLoggingIn(false);
        navigate(location);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoggingIn(false);
      });
  };

  return (
    <div className="contain py-10 min-h-[70vh] flex flex-col items-center justify-center">
      <form
        onSubmit={login}
        className="w-full max-w-md max-auto flex flex-col gap-3 p-5 rounded-lg shadow-lg text-lg"
      >
        <SectionTitle>Login</SectionTitle>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            autoComplete="true"
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full text-lg"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input
            autoComplete="true"
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered w-full text-lg"
          />
        </div>
        <button className="btn">
          {loggingIn ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Login"
          )}
        </button>
        <p className="text-lg">
          New to this site?{" "}
          <Link to="/register" className="text-slate-300">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

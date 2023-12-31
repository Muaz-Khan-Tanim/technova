import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { registerUser, googleLogin, darkTheme } = useContext(AuthContext);
  const [registering, setRegistering] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  location = location.state || "/account";

  const register = (e) => {
    e.preventDefault();
    setRegistering(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const dp = form.dp.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast("Password must contain at least 6 characters.");
      setRegistering(false);
    } else if (!/[A-Z]/.test(password)) {
      toast("Password must contain a capital letter.");
      setRegistering(false);
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      toast("Password must contain a special character.");
      setRegistering(false);
    } else {
      console.log("Registering...");
      registerUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: name,
            photoURL: dp,
          })
            .then(() => {
              const user = { email, name, dp, cart: [] };
              fetch("http://localhost:4000/user", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              }).then(() => {
                toast.success("Registered successfully.");
                setRegistering(false);
                navigate(location);
              });
            })
            .catch((error) => {
              console.error(error);
              setRegistering(false);
            });
        })
        .catch((error) => {
          toast.error(error.message);
          setRegistering(false);
        });
    }
  };

  return (
    <div
      className={`contain mt py-10 min-h-[70vh] flex flex-col items-center justify-center ${
        darkTheme ? "bg-base-100 text-slate-400" : "bg-slate-200 text-slate-800"
      }`}
    >
      <form
        onSubmit={register}
        className="w-full max-w-md max-auto flex flex-col gap-3 p-5 rounded-lg shadow-lg text-lg"
      >
        <SectionTitle>Register</SectionTitle>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input
            autoComplete="true"
            type="text"
            placeholder="Name"
            name="name"
            required
            className={`input input-bordered w-full text-lg ${
              darkTheme
                ? "bg-base-100 text-slate-400"
                : "bg-slate-200 text-slate-800"
            }`}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            autoComplete="true"
            type="email"
            placeholder="Email"
            name="email"
            required
            className={`input input-bordered w-full text-lg ${
              darkTheme
                ? "bg-base-100 text-slate-400"
                : "bg-slate-200 text-slate-800"
            }`}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Profile Picture URL</span>
          </label>
          <input
            autoComplete="true"
            type="text"
            placeholder="DP URL (Optional)"
            name="dp"
            className={`input input-bordered w-full text-lg ${
              darkTheme
                ? "bg-base-100 text-slate-400"
                : "bg-slate-200 text-slate-800"
            }`}
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
            required
            className={`input input-bordered w-full text-lg ${
              darkTheme
                ? "bg-base-100 text-slate-400"
                : "bg-slate-200 text-slate-800"
            }`}
          />
        </div>

        <button type="submit" className="btn">
          {registering ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Register"
          )}
        </button>
        <p className="text-lg">
          Already have an account?{" "}
          <Link
            to="/login"
            className={`${darkTheme ? "text-slate-300" : "text-slate-900"}`}
          >
            Login
          </Link>
        </p>

        <button
          onClick={() => {
            googleLogin()
              .then(() => {
                toast.success("Logged in.");
                navigate(location);
              })
              .catch((error) => {
                console.error(error);
                toast.error(error.message);
              });
          }}
          type="button"
          className={`btn btn-outline w-full my-2 flex flex-row gap-2 items-center justify-center text-lg ${
            darkTheme ? "text-slate-300" : "text-slate-900"
          }`}
        >
          <FaGoogle /> Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Register;

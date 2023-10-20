import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
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
    } else if (/[A-Z]/.test(password)) {
      toast("Password must contain a capital letter.");
    } else if (/[^a-zA-Z0-9]/.text(password)) {
      toast("Password must contain a special character.");
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
    <div className="contain py-10 min-h-[70vh] flex flex-col items-center justify-center">
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
            className="input input-bordered w-full text-lg"
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
            className="input input-bordered w-full text-lg"
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
            required
            className="input input-bordered w-full text-lg"
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
          <Link to="/login" className="text-slate-300">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

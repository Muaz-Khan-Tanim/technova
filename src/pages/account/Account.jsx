import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Account = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);

  const update = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <section className="contain py-10 px-3 flex flex-col justify-center items-center gap-4 text-slate-400 text-lg">
      <form
        onSubmit={update}
        className="flex flex-col md:flex-row gap-5 items-center justify-center w-full max-w-2xl"
      >
        <img
          src={user?.photoURL}
          alt=""
          className="w-[140px] aspect-square object-cover rounded-2xl"
        />

        <div className="flex flex-col gap-4 justify-center items-center w-full max-w-sm">
          {/* Input Div */}
          <div className="w-full flex flex-row gap-2 items-center">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              defaultValue={user?.displayName}
              className={`w-full p-1 rounded-md text-slate-300 bg-transparent outline-none border-2 focus:border-slate-500 ${
                editing ? "border-slate-500" : "border-transparent"
              }`}
            />
          </div>
          {/* Input Div */}
          <div className="w-full flex flex-row gap-2 items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              defaultValue={user?.email}
              disabled
              className={`w-full p-1 rounded-md text-slate-400 bg-transparent outline-none border-2 focus:border-slate-500 ${
                editing ? "border-slate-500" : "border-transparent"
              }`}
            />
          </div>
          {/* Input Div */}
          <div className="w-full flex flex-row gap-2 items-center">
            <label htmlFor="dp">DP:</label>
            <input
              type="text"
              placeholder="DP URL"
              name="dp"
              defaultValue={user?.photoURL}
              className={`w-full p-1 rounded-md text-slate-300 bg-transparent outline-none border-2 focus:border-slate-500 ${
                editing ? "border-slate-500" : "border-transparent"
              }`}
            />
          </div>

          {editing ? (
            <button
              type="submit"
              className="btn py-2 block ml-auto px-4 leading-1 min-h-fit h-fit bg-green-800 text-slate-300 capitalize text-lg"
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="btn py-2 block ml-auto px-4 leading-1 min-h-fit h-fit bg-blue-800 text-slate-300 capitalize text-lg"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Account;

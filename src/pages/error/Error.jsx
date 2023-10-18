import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
            <h1 className="text-8xl mb-5 text-center text-slate-600 font-extrabold">404</h1>
            <p className="text-slate-400 text-xl text-center">Not found. Back to <Link className="text-slate-200" to="/">Home</Link>?</p>
        </div>
    );
};

export default Error;
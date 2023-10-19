import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="w-full py-9 px-3 border-t-2 border-slate-600">
        <div className="contain grid md:grid-cols-3 gap-5">
          <div>
            <h2 className="text-4xl text-slate-400 font-semibold">Logo</h2>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-semibold text-slate-300">
              Footer Title
            </h4>
            <div className="text-lg text-slate-400 flex flex-col items-start gap-1">
              <Link>Link</Link>
              <Link>Link</Link>
              <Link>Link</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-semibold text-slate-300">
              Footer Title
            </h4>
            <div className="text-lg text-slate-400 flex flex-col items-start gap-1">
              <Link>Link</Link>
              <Link>Link</Link>
              <Link>Link</Link>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
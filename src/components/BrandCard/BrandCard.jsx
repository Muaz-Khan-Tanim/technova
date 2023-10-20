import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BrandCard = ({ brand }) => {
  const { darkTheme } = useContext(AuthContext);
  const { name, slug, logo } = brand;

  return (
    <Link
      to={`/brand/${slug}`}
      className={`w-full flex flex-col p-2 shadow-lg ${
        darkTheme ? "text-slate-400" : "text-slate-800"
      } gap-3 items-start rounded-md`}
    >
      <img
        src={logo}
        alt=""
        className="h-[200px] object-contain block mx-auto"
      />
      <h2 className="text-2xl md:text-4xl text-center font-medium block w-full mb-4">
        {name}
      </h2>
    </Link>
  );
};

export default BrandCard;

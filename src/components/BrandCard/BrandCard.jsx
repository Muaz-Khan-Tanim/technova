import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { name, slug, logo } = brand;

  return (
    <Link
      to={`/brand/${slug}`}
      className="w-full flex flex-col p-2 shadow-lg text-slate-400 gap-3 items-start rounded-md"
    >
      <img
        src={logo}
        alt=""
        className="h-[200px] object-contain block mx-auto"
      />
      <h2 className="text-4xl text-center text-slate-300 font-medium block w-full mb-4">
        {name}
      </h2>
    </Link>
  );
};

export default BrandCard;

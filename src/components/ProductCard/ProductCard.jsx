import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id, image, name, brand, type, price, rating } = product;

  return (
    <div className="w-full rounded-xl shadow-lg p-3 overflow-hidden border-2 border-neutral-500 flex flex-col gap-4 text-base">
      <img
        src={image}
        alt=""
        className="w-full aspect-video object-contain rounded-lg"
      />
      <h3 className="text-xl font-regular text-slate-400">{name}</h3>
      <p>Brand: {brand}</p>
      <p>
        Category: <span className="badge capitalize">{type}</span>
      </p>
      <p>Rating: {rating}</p>
      <p>Price: ${price}.00</p>
      <div className="grid grid-cols-3 gap-3">
        <Link to={`/product/${_id}`} className="btn col-span-2">
          View Product
        </Link>
        <button className="btn btn-primary"><FaShoppingCart /></button>
      </div>
    </div>
  );
};

export default ProductCard;

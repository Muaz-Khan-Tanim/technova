import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, image, name, brand, type, price, rating } = product;

  return (
    <div className="w-full rounded-xl shadow-lg p-3 overflow-hidden border-2 border-neutral-500 flex flex-col gap-4 text-lg">
      <img
        src={image}
        alt=""
        className="w-full aspect-video object-contain rounded-lg"
      />
      <h3 className="text-2xl font-regular text-slate-400">{name}</h3>
      <p>Brand: {brand}</p>
      <p>
        Category: <span className="badge capitalize">{type}</span>
      </p>
      <p>Rating: {rating}</p>
      <p>Price: ${price}.00</p>
      <div className="grid grid-cols-2 gap-3">
        <Link to={`/product/${_id}`} className="btn">
          View Product
        </Link>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

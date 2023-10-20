import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CartCard = ({ product, products, setProducts }) => {
  const { removeFromCart } = useContext(AuthContext);
  const { _id, image, name, brand, type, price } = product;

  const remove = () => {
    removeFromCart(_id);
    setProducts(products.filter((product) => product._id != _id));
  };

  return (
    <div className="w-full grid grid-cols-4 items-center gap-7 pb-8 border-b-[1px] border-base-300">
      <div className="col-span-1">
        <img
          src={image}
          alt=""
          className="rounded-2xl w-full aspect-square object-contain"
        />
      </div>
      <div className="col-span-3 text-slate-400 flex flex-col gap-3 items-start text-base">
        <h3 className="text-xl">{name}</h3>
        <div className="w-full flex flex-row justify-between items-center gap-5">
          <div className="flex flex-col gap-2">
            <p>
              Brand: <span className="badge">{brand}</span>
            </p>
            <p>
              Category: <span className="badge">{type}</span>
            </p>
            <p>Price: ${price}.00</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to={`/product/${_id}`} className="btn btn-neutral">
              View Product
            </Link>
            <button
              onClick={() => remove()}
              className="btn btn-outline outline-red-600 text-red-600"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

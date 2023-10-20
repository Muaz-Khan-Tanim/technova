import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Link, useLoaderData } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";
import CartGif from "../../assets/gifs/cart.gif";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [loading, setLoading] = useState(true);
  let cart = useLoaderData();
  cart = cart[0]?.cart;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/cart/products/${cart}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [cart]);

  const clearCart = () => {
    const info = { userEmail, cart: [] };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear cart!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/cart/clear`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.modifiedCount > 0) {
              Swal.fire("Cleared!", "Cart has been cleared.", "success");
              toast.success("Cart cleared.");
              setProducts([]);
            } else {
              toast.error("Cart not cleared.");
            }
          });
      }
    });
  };

  return (
    <section className="contain">
      <SectionTitle>Cart</SectionTitle>
      {products?.length > 0 && (
        <p className="text-lg font-medium text-blue-500 block mb-4">
          {products?.length} products in cart
        </p>
      )}
      {loading ? (
        <div className="contain py-20 flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : products?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-8">
            {products?.map((product) => (
              <CartCard
                key={product?._id}
                product={product && product}
                products={products}
                setProducts={setProducts}
              ></CartCard>
            ))}
          </div>
          <button
            onClick={() => clearCart()}
            className="btn btn-error mt-12 mb-5 ml-auto block w-fit"
          >
            Clear cart
          </button>
        </>
      ) : (
        <div className="contain flex flex-col justify-center items-center gap-5 min-h-[50vh] text-slate-400 text-lg text-center">
          <img
            src={CartGif}
            alt=""
            className="w-full max-w-[170px] aspect-square object-cover rounded-full"
          />
          <p>
            Your cart is empty.{" "}
            <Link to="/shop" className="text-blue-600">
              Start shopping?
            </Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default Cart;

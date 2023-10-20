import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Shop = () => {
  const { darkTheme } = useContext(AuthContext);
  const products = useLoaderData();

  return (
    <section
      className={`contain mt ${
        darkTheme ? "bg-base-100 text-slate-400" : "bg-slate-200 text-slate-800"
      }`}
    >
      <SectionTitle>Shop</SectionTitle>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Shop;

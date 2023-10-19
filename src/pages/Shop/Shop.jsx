import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  const products = useLoaderData();

  return (
    <section className="contain">
      <SectionTitle>Shop</SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Shop;

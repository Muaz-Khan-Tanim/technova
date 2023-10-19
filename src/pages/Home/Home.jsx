import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import BrandCard from "../../components/BrandCard/BrandCard";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const brands = useLoaderData();
  const [phones, setPhones] = useState([]);
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products/type/phone/4")
      .then((res) => res.json())
      .then((data) => setPhones(data));

    fetch("http://localhost:4000/products/type/watch/4")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <main>
      <div className="w-full">
        <img
          src="https://i0.wp.com/www.applestore.pk/wp-content/uploads/2020/03/iPhone-11-Pro-Inner-Banner-1920-X-710-Website.jpg?ssl=1"
          alt=""
          className="w-full"
        />
      </div>

      <section className="contain py-16">
        <SectionTitle>Brands</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands?.map((brand) => (
            <BrandCard key={brand?._id} brand={brand}></BrandCard>
          ))}
        </div>
      </section>

      <section className="contain py-10">
        <SectionTitle>Phones</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {phones?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>

        <div className="mt-7 flex justify-end">
          <Link to="/shop" className="btn">
            See all <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="contain py-10">
        <SectionTitle>Watches</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {watches?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
        <div className="mt-7 flex justify-end">
          <Link to="/shop" className="btn">
            See all <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

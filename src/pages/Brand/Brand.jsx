import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./brand.css";
import Slider from "react-slick";
import NoProductsGif from "../../assets/gifs/no_products.gif";

const Brand = () => {
  const brand = useLoaderData();
  const { name, logo, featured } = brand[0];
  const [products, setProducts] = useState([]);
  const featuredItems = featured ? JSON.parse(featured) : [];

  useEffect(() => {
    fetch(`http://localhost:4000/products/brand/${name}`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3000,
    // nextArrow: <SlickNextArrow />,
    // prevArrow: <SlickPreviousArrow />,
  };

  return (
    <section className="p-0 mt">
      <div className="grid grid-cols-4 bg-white bg-opacity-100 p-0 items-center">
        <div className="w-full">
          <img
            src={logo}
            alt=""
            className="w-full max-w-[200px] block mx-auto"
          />
        </div>
        <Slider {...settings} className="col-span-3">
          {featuredItems?.map((featured, index) => (
            <div key={index}>
              <img
                src={featured}
                alt=""
                className="w-full aspect-[16/5] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Products */}
      {products?.length > 0 ? (
        <div className="contain p-5 grid grid-cols-2 md:grid-cols-3 gap-5">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <div className="contain flex flex-col justify-center items-center gap-5 min-h-[50vh] text-slate-400 text-lg text-center">
          <img
            src={NoProductsGif}
            alt=""
            className="w-full max-w-[170px] aspect-square object-cover rounded-full"
          />
          <p>
            Sorry, currently there are no available products of this brand.
            <Link to="/shop" className="text-blue-600 block">
              Check out products of other brands?
            </Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default Brand;

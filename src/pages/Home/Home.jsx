import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import BrandCard from "../../components/BrandCard/BrandCard";

const Home = () => {
  const brands = useLoaderData();

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

      <section className="contain py-16">
        <SectionTitle>Phones</SectionTitle>
      </section>
    </main>
  );
};

export default Home;

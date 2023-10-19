import { useLoaderData } from "react-router-dom";

const Product = () => {
    const importedProduct = useLoaderData();
    const product = importedProduct[0];
    
  return (
    <section className="contain grid grid-cols-2 gap-6 items-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
            <img src={product?.image} alt="" className="w-full max-w-[300px] block mx-auto" />
        </div>
        <div className="w-full flex flex-col gap-3 items-left text-slate-200 font-regular text-lg">
            <h1 className="text-3xl font-medium">{product?.name}</h1>
            <span className="badge badge-primary capitalize">{product?.type}</span>
            <p>Brand: {product?.brand}</p>
            <p className="text-slate-300">{product?.shortDescription}</p>
            <p>Rating: {product?.rating}</p>
            <p>Price: ${product?.price}.00</p>
            <button className="btn btn-primary">Add to cart</button>
        </div>
    </section>
  );
};

export default Product;

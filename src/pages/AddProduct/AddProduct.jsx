import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [adding, setAdding] = useState(false);

  const addProduct = (e) => {
    e.preventDefault();
    setAdding(true);
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;

    const product = {
      image,
      name,
      brand,
      type,
      price,
      rating,
      shortDescription,
    };

    fetch("http://localhost:4000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.insertedId) {
          toast.success("Product added.");
          form.reset();
          setAdding(false);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setAdding(false);
      });
  };

  return (
    <section className="contain">
      <SectionTitle>Add a product</SectionTitle>
      <form
        onSubmit={addProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Image</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            className="input input-bordered w-full text-lg"
          />
        </div>
        {/* Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            className="input input-bordered w-full text-lg"
          />
        </div>
        {/* Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Brand</span>
          </label>
          <input
            type="text"
            placeholder="Brand Name"
            name="brand"
            className="input input-bordered w-full text-lg"
          />
        </div>
        {/* Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Product Type</span>
          </label>
          <select
            defaultValue="phone"
            name="type"
            className="select select-bordered w-full text-lg"
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            <option value="tv">Telivision</option>
          </select>
        </div>
        {/* Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Price</span>
          </label>
          <input
            type="number"
            placeholder="Product price"
            name="price"
            className="input input-bordered w-full text-lg"
          />
        </div>
        {/* Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Rating</span>
          </label>
          <input
            type="number"
            placeholder="Product rating"
            name="rating"
            className="input input-bordered w-full text-lg"
          />
        </div>
        {/* Input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Short Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full text-lg"
            placeholder="A little bit about the product..."
            name="shortDescription"
          ></textarea>
        </div>
        <button
          type="submit"
          className="md:col-span-2 btn py-2 block mx-auto px-4 leading-1 min-h-fit h-fit bg-emerald-700 text-slate-300 capitalize text-lg mt-4"
        >
          {adding ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Add product"
          )}
        </button>
      </form>
    </section>
  );
};

export default AddProduct;

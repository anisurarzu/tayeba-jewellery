import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AddProducts = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://obscure-journey-77099.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          setMessage("SuccessFully Inserted!");
        }
      });
  };
  return (
    <div className="pt-24">
      {/* service adding field */}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold tex-gray-600 py-4">
            Add A New Service
          </h2>
          <h4 className="text-green-500 py-4">{message}</h4>
          <form
            className=" grid grid-cols-1 gap-2 justify-center items-center border-2 border-dotted border-red-500 mx-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="pt-8">
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                {...register("name")}
                placeholder="product name"
                required
              />
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                type="number"
                {...register("price")}
                placeholder="product price"
                required
              />
            </div>

            <div>
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                {...register("description")}
                placeholder="product details"
                required
              />
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                {...register("img")}
                placeholder="img url"
                required
              />
            </div>

            <input
              className="p-2 bg-black mx-16  my-4 text-white font-bold rounded"
              type="submit"
            />
          </form>
        </div>
        <div></div>
      </div>
      <div>
        <NavLink to="/dashboard">
          <button className=" p-2 mt-8 bg-black text-white rounded shadow">
            Go to Dashboard
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddProducts;

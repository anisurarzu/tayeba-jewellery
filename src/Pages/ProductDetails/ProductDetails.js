import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const [singleService, setSingleService] = useState();

  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);

  const onSubmit = (data) => {
    let orderStatus = "pending";
    data.status = orderStatus;
    fetch("https://frightful-demon-22619.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setMessage("Order placed Successfully!");
          reset();
        }
      });
  };

  return (
    <div className="details-container py-12 xl:py-16 lg:py-16">
      {singleService ? (
        <>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-16 lg:pt-8 ">
            <div className="lg:rounded-t-2xl bg-white p-8">
              <h2 className="text-3xl font-bold text-gray-500">
                {singleService.name}
              </h2>
              <div className=" p-8">
                <img className="w-64 h-64" src={singleService.img} alt="" />
              </div>
              <hr /> <br />
              <p className="text-xl font-bold text-gray-700">
                Price Range: {singleService.price}৳
              </p>
              <hr />
              <br />
              <p className="p-2 text-center text-gray-600 text-base">
                {singleService.description}
              </p>
              <Link to="/contact">
                <button className="shadow rounded-lg text-white font-bold btn-design p-2">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="py-8 border-l-2 border-dotted">
              <h3 className="text-2xl text-gray-600 font-bold py-4">
                Confirm Your Order
              </h3>
              {/* --------
                  place order form
              -------------------- */}
              <form
                className=" grid grid-cols-1 gap-2 justify-center items-center border-2 border-dotted border-red-500 mx-12"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="pt-8">
                  <input
                    defaultValue={user.displayName}
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("name")}
                  />
                  <input
                    defaultValue={user.email}
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("email")}
                  />
                </div>

                <div>
                  <input
                    defaultValue={singleService.name}
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("serviceName")}
                  />
                  <input
                    defaultValue={singleService.price}
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("price")}
                  />
                </div>

                <div>
                  <label htmlFor="type " className="text-gray-700 pr-4">
                    Type of Your Product :
                  </label>
                  <select
                    className=" border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("type")}
                    required
                  >
                    <option value="foods">Foods</option>
                    <option value="electronics">Electronics</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="books">Books</option>
                    <option value="materials">Materials</option>
                  </select>
                </div>

                <div>
                  <input
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    type="number"
                    {...register("quantity")}
                    placeholder="quantity"
                    required
                  />
                  <input
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("phone")}
                    placeholder="phone number"
                    required
                  />
                </div>
                <br />
                <label htmlFor="destination">Destination:</label>
                <div>
                  <input
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("sending_location")}
                    placeholder="from"
                    required
                  />
                  <input
                    className="border-2 p-2 w-1/3 mr-8 rounded"
                    {...register("receiving_location")}
                    placeholder="to"
                    required
                  />
                </div>

                <input
                  className="p-2 btn-design mx-16 xl:mx-64 lg:mx-64  my-4 text-white font-bold rounded"
                  type="submit"
                />
              </form>

              <p
                id="message"
                className="xl:text-2xl lg:text-2xl font-bold  pt-4"
              >
                {message}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ProductDetails;

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
    fetch(`https://obscure-journey-77099.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);

  const onSubmit = (data) => {
    let orderStatus = "pending";
    data.status = orderStatus;
    fetch("https://obscure-journey-77099.herokuapp.com/orders", {
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
            </div>
            <div className="py-8 border-l-2 border-dotted">
              <h3 className="text-2xl text-gray-600 font-bold py-4">
                Confirm Your Order
              </h3>
              {/* --------
                  place order form
              -------------------- */}
              <form
                className=" grid grid-cols-1 gap-2 justify-center items-center border-2 border-dotted border-black-500 mx-12"
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

                <input
                  className="p-2 btn-design mx-16 xl:mx-64 lg:mx-64  bg-black my-4 text-white font-bold rounded"
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

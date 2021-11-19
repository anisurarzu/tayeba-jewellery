import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ManageProducts = () => {
  const [product, setProduct] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleDeleteProduct = (id) => {
    const check = window.confirm("Are you sure,you want to cancel this order?");

    if (check) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            const restProduct = product.filter((product) => product._id !== id);
            setProduct(restProduct);
            setMessage("Your Product Deleted Successfully!");
          }
        });
    }
  };
  return (
    <div className="py-12 mr-24">
      <h4 className="text-green-500 ">{message}</h4>
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-6 header py-4">
        <div>Product</div>
        <div>Price</div>

        <div>Delete</div>
      </div>
      {product?.map((product) => (
        <div key={product._id}>
          <div className="grid grid-cols-2 grid:cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6  border-2 border-dotted  xl:border-b-4 lg:border-b-4  p-6 mx-4 xl:mx-0 lg:mx-0 ">
            <h3 className="border-r-2">{product.name}</h3>
            <h5 className="border-r-2 ">{product.price}</h5>
            <img src={product.img} className="w-12 h-12" alt="" />
            <button onClick={() => handleDeleteProduct(product._id)}>
              <i className="fas fa-trash-alt delete-btn"></i>
            </button>
          </div>
        </div>
      ))}

      <div>
        <Link to="/">
          <button className=" p-2 mt-8 bg-black text-white rounded shadow">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageProducts;

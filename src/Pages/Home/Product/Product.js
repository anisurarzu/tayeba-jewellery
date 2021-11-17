import { Spin } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, price, description, img } = product;
  console.log(name);
  return (
    <div className="  lg:hover:shadow-2xl pt-8 p-8 rounded">
      {product ? (
        <div data-aos="zoom-in-down" className="service-card">
          <img className="" src={img} alt="" />
          <h3 className="text-xl font-bold text-gray-600 pt-2">{name}</h3>
          <p className="text-xl font-semibold " style={{ color: "#A71B57" }}>
            {price}৳
          </p>
          <p className="text-gray-900 py-2">{description}</p>
          <Link to={`/product/${_id}`}>
            <button className="btn-design border-2 border-black hover:bg-gray-700 hover:text-white text-center py-2 px-4 rounded-full">
              <i className="fas fa-truck"></i> Buy Now
            </button>
          </Link>
        </div>
      ) : (
        <Spin></Spin>
      )}
    </div>
  );
};

export default Product;

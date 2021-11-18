import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";

const AllProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="xl:px-44 lg:px-44 md:px-32 sm:px-8 ">
      <h2 className="tracking-wider text-4xl font-bold xl:text-5xl lg:text-5xl md:text-4xl  lg:font-bold md:font-bold sm:font-bold pt-20 pb-8">
        All Collection
      </h2>

      {products ? (
        <>
          <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {/* {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))} */}

            {products.map((product) => (
              <AllProduct key={products._id} product={product}></AllProduct>
            ))}
          </div>
        </>
      ) : (
        <Spin></Spin>
      )}
    </div>
  );
};

export default AllProducts;

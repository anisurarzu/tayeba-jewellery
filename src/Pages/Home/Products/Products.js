import { Spin } from "antd";

import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useProducts();

  return (
    <div className="xl:px-44 lg:px-44 md:px-32 sm:px-8 ">
      <h2 className="tracking-wider text-4xl font-bold xl:text-5xl lg:text-5xl md:text-4xl  lg:font-bold md:font-bold sm:font-bold pt-20 pb-8">
        Wedding Rings!
      </h2>

      {products ? (
        <>
          <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {/* {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))} */}

            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      ) : (
        <Spin></Spin>
      )}
    </div>
  );
};

export default Products;

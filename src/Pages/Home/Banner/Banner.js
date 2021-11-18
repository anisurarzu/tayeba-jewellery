import { Carousel } from "antd";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    textAlign: "center",
  };

  function onChange(a, b, c) {}
  return (
    <div>
      <Carousel autoplay afterChange={onChange}>
        {/* slider 1 */}
        <div className="banner-1">
          <div
            style={contentStyle}
            className="banner-design pt-16 grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1"
          >
            <div
              data-aos="fade-down"
              className="items-stretch lg:text-left lg:pl-32 text-center grid items-center justify-center"
            >
              <h2 className="text-2xl tracking-widest  pb-2 pt-8 font-extrabold">
                Tayeba Jewellery....
              </h2>
              <h1 className="text-4xl lg:text-6xl text-black font-extrabold">
                We Provide Best Wedding Rings & 100% original Product
                <br />
              </h1>
              <hr />
              <p className="lg:text-xl ">
                We Are A Digital Agency Focused On Delivering Content And
                Utility User-Experiences.
              </p>

              <Link to="/allProducts">
                <button className="p-4 bg-black text-white">Explore</button>
              </Link>
            </div>
          </div>
        </div>
        {/* slider 2 */}
        <div className="banner-2 ">
          <div
            style={contentStyle}
            className="banner-design pt-16 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1"
          >
            {/* <div className="border-2 border-black m-40 bg-black rounded">
              <h2 className="text-center pt-8 text-white text-6xl font-bold ">
                20%
              </h2>
            </div> */}
            <div></div>
            <div className="items-center text-center ">
              <h2 className="text-2xl tracking-widest text-gray-700 pb-2 pt-8 font-extrabold">
                " We Offer"
              </h2>
              <h1 className="text-4xl lg:text-6xl text-black font-extrabold">
                20% Off on Any Rings
              </h1>
              <hr />
              <p className="text-sm lg:text-lg">
                We Are A Digital Agency Focused On Delivering Content And
                Utility User-Experiences.
              </p>
            </div>

            {/* <div className="border-2 border-black m-40 bg-black rounded">
              <h2 className="text-center pt-8 text-white text-6xl font-bold ">
                20%
              </h2>
            </div> */}
            <div></div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

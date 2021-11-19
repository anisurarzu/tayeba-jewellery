import React from "react";

const Contact = () => {
  return (
    <div className="  py-8">
      <div className="pb-16">
        <h2 className="title-design  text-2xl lg:text-4xl font-extrabold pt-12">
          Contact US
        </h2>
        <div className="px-5 xl:px-20 lg:px-20 md:px-16 sm:px-16 ">
          <div className="pt-4    grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center ">
            <div
              data-aos="zoom-out"
              className="items-center text-center p-5 lg:pr-24"
            >
              <h2 className="text-2xl text-black tracking-widest text-gray-700 pb-2 lg:pt-8 font-extrabold">
                We have Experience Management Team!
              </h2>
              <h1 className="text-2xl lg:text-6xl text-gray-800 font-extrabold">
                Best Support!
              </h1>
              <hr />
              <p className="text-sm lg:text-xl pt-2 ">
                <span>Phone - 01789879345</span>
                <br />
                <span>E-mail - ecomsupport@tayba-jewellery.com</span>
                <br />
                <button className="p-2 bg-black text-white rounded my-2">
                  Learn More
                </button>
              </p>
            </div>
            <div data-aos="zoom-out-up" className="xl:pl-24 pt-16">
              <img
                className="w-3/4 ml-16"
                src="https://i.ibb.co/M5J5P98/contact.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

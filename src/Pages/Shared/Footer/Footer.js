import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 ">
      <footer className="text-gray-700 body-font ">
        <div
          className="
      container
      px-5
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col 
       xl:px-24 lg:px-24
    "
        >
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            {/* <Link
              to="/"
              className="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-white
        "
            >
              <img src="" alt="" />
            </Link> */}
            <p className="mt-2 text-sm text-gray-500">
              Made with in Dhaka, Bangladesh. Going and the Going logo are
              trademarks of Going Ltd. © 2021 Going Ltd. All rights reserved.
            </p>
          </div>
          <div
            className="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
          >
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div
            className="
        container
        mx-auto
        py-4
        px-5
        flex flex-wrap flex-col
        sm:flex-row
      "
          >
            <p className="text-white text-sm text-center sm:text-left">
              © 2021 Copyright:
              <a
                href="https://www.tailwind-elements.com/"
                className="text-white ml-1"
                target="_blank"
              >
                Going Courier
              </a>
            </p>
            <span
              className="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-2
          justify-center
          sm:justify-start
        "
            >
              <a href="" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="ml-3 text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="ml-3 text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="" className="ml-3 text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="" className="ml-3 text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";
import NavDrawer from "./NavDrawer";

import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const [navDrawerVisible, setNavDrawerVisible] = useState(false);
  const { user, logOut } = useAuth();
  return (
    <div className="mx-auto">
      <nav className=" px-6 bg-gray-500 fixed left-0 right-0 top-0 h-16 lg:h-16 shadow-lg text-sm font-bold nav-container flex justify-between items-center z-50">
        <NavLink
          className="lg:h-full logo flex items-center lg:font-extrabold text-white"
          to="/home"
        >
          <p>Tayeba jewellery</p>
        </NavLink>
        <button
          className="lg:hidden "
          onClick={() => setNavDrawerVisible(true)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>

        <div className="text-sm items-center text-green-400 hidden lg:flex">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/allProducts">Explore</NavLink>

          <div>
            {user?.email && (
              <span>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </span>
            )}
          </div>
          <div>
            {user?.email && (
              <span className="user-details pl-8 text-gray-800">
                {user?.displayName}
              </span>
            )}

            {user?.email ? (
              <button
                className="ml-8 text-sm btn-design text-white rounded-md shadow p-2 "
                onClick={logOut}
              >
                <i className="fas fa-sign-out-alt pr-2"></i> log out
              </button>
            ) : (
              <NavLink to="/login">
                <span className="ml-8 text-sm btn-design text-white rounded-md shadow p-2 px-4">
                  <i className="fas fa-sign-in-alt pr-2 "></i> Login
                </span>
              </NavLink>
            )}
          </div>

          {user?.email && (
            <span className="pl-8">
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </span>
          )}
        </div>
      </nav>
      <div className="lg:h-16" />
      <NavDrawer
        visible={navDrawerVisible}
        setVisible={setNavDrawerVisible}
        user={user}
        logOut={logOut}
      />
    </div>
  );
};

export default Header;

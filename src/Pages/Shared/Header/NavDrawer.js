import React from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

const NavDrawer = ({ visible, setVisible, user, logOut }) => {
  const closeDrawer = () => setVisible(false);

  return (
    <>
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <div className="flex flex-col text-green-400 text-center mt-5">
          {user?.email && (
            <span className="block pb-2 text-center">
              <img
                className="w-16 h-16 rounded-full border-2 mx-auto border-gray-700"
                src={user?.photoURL}
                alt="profile"
              />
            </span>
          )}
          {user?.email && (
            <span className="pb-2 font-semibold user-details text-gray-600">
              {user?.displayName}
            </span>
          )}
          <NavLink
            to="/home"
            className="py-2 text-gray-700"
            onClick={closeDrawer}
          >
            Home
          </NavLink>
          <NavLink
            to="/allProducts"
            className="py-2 text-gray-700"
            onClick={closeDrawer}
          >
            Explore
          </NavLink>

          <div>
            {user?.email && (
              <span>
                <br />
                <br />
                <NavLink to="/dashboard" className="text-gray-700">
                  Dashboard
                </NavLink>
              </span>
            )}
          </div>

          {user?.email ? (
            <button
              className="text-sm w-full block mt-2 bg-black text-white rounded-md shadow p-2 "
              onClick={() => {
                closeDrawer();
                logOut();
              }}
            >
              <i className="fas fa-sign-out-alt pr-2"></i> log out
            </button>
          ) : (
            <NavLink to="/login" onClick={closeDrawer}>
              <span className="text-sm w-full block mt-2 bg-black  text-white rounded-md shadow p-2 px-4">
                <i className="fas fa-sign-in-alt pr-2"></i> Login
              </span>
            </NavLink>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default NavDrawer;

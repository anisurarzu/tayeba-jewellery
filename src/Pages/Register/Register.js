import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    console.log(loginData);
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col bg-white rounded shadow-lg p-4 mt-12"
      >
        <label className="text-left text-green-500" htmlFor="name">
          Name
        </label>
        <input
          onBlur={handleOnBlur}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
          required
          placeholder="your name"
        />
        <label className="text-left text-green-500" htmlFor="email">
          Email
        </label>
        <input
          onBlur={handleOnBlur}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="email"
          required
          name="email"
          placeholder="your email"
        />
        <label className="text-left text-green-500" htmlFor="password">
          Password
        </label>
        <input
          onBlur={handleOnBlur}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
          name="password"
          placeholder="your password"
          required
        />
        <label className="text-left text-green-500" htmlFor="password">
          Re-type Your Password
        </label>
        <input
          onBlur={handleOnBlur}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
          name="password2"
          placeholder="re-type your password"
          required
        />

        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 w-64 bg-green-400 mt-8 rounded font-bold text-sm text-blue-100 hover:bg-blue-600"
        >
          Register
        </button>
      </form>

      <NavLink style={{ textDecoration: "none" }} to="/login">
        <button variant="text">Already Registered? Please Login</button>
      </NavLink>
      {user?.email && (
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="text-sm">User Created SuccessFully!</p>
            </div>
          </div>
        </div>
      )}
      {authError && <span>{authError}</span>}
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="login-container flex flex-col items-center  grid justify-center w-screen lg:mt-4 mt-16  text-gray-700">
      <span className="text-yellow-600 ">{authError}</span>

      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col bg-white rounded shadow-lg p-4 mt-12"
      >
        <label className="text-left text-green-500" htmlFor="email">
          Email
        </label>
        <input
          onChange={handleOnChange}
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
          onChange={handleOnChange}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
          name="password"
          placeholder="your password"
          required
        />

        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 w-64 bg-green-400 mt-8 rounded font-bold text-sm text-blue-100 hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <NavLink style={{ textDecoration: "none" }} to="/register">
        <button>New User? Please Register</button>
      </NavLink>
      {user?.email && <span>Login successfully!</span>}
      {authError && <span>{authError}</span>}

      <div>-----Or----</div>
      <button
        className="bg-black p-2 text-white rounded-lg"
        onClick={handleGoogleSignIn}
      >
        <i className="fab fa-google pr-2"></i> Sign In With Google
      </button>
    </div>
  );
};

export default Login;

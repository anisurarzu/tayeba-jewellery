import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";
import useAuth from "../../../hooks/useAuth";
const Review = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        setMessage("SuccessFully Inserted!");
      }
    });
  };
  return (
    <div className="pt-24">
      {/* service adding field */}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold tex-gray-600 py-4">Add Review</h2>
          <h4 className="text-green-500 py-4">{message}</h4>
          <form
            className=" grid grid-cols-1 gap-2 justify-center items-center border-2 border-dotted border-red-500 mx-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="pt-8">
              <input
                style={{ width: "200px" }}
                type="text"
                className="border-2 p-2 w-1/3 mr-8 rounded py-2 my-2 "
                {...register("name")}
                defaultValue={user.displayName}
                required
              />
              <br />
              <input
                style={{ width: "200px" }}
                type="email"
                className="border-2 p-2 w-1/3 mr-8 rounded py-2 my-2"
                {...register("email")}
                defaultValue={user.email}
                required
              />
              <textarea
                name="details"
                id=""
                cols="30"
                rows="10"
                {...register("details")}
                placeholder="write details"
                className="border-2 border-black"
              ></textarea>
              <input
                type="number"
                className="border-2 p-2 w-1/3 mr-8 rounded"
                {...register("rating")}
                placeholder="rating"
                required
              />
            </div>

            <input
              className="p-2 bg-black mx-16  my-4 text-white font-bold rounded"
              type="submit"
            />
          </form>
        </div>
        <div></div>
      </div>
      <div>
        <NavLink to="/dashboard">
          <button className=" p-2 mt-8 bg-black text-white rounded shadow">
            Go to Dashboard
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Review;

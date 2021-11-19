import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const [message, setMessage] = useState("");
  const { orderId } = useParams();
  // console.log("orderid", orderId);
  console.log(order);
  useEffect(() => {
    fetch(`https://obscure-journey-77099.herokuapp.com/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  // update status
  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    const updatedOrder = { ...order };
    updatedOrder.status = updatedStatus;
    setOrder(updatedOrder);
  };
  const handleUpdateOrderStatus = (e) => {
    e.preventDefault();
    const url = `https://obscure-journey-77099.herokuapp.com/orders/${orderId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setMessage("Status Updated Successfully!");
          setOrder({});
        }
      });
  };
  return (
    <div className="pt-12">
      <h2 className="text-2xl text-gray-700 font-bold py-4">
        Update Order Status
      </h2>
      <span className="py-2 text-green-500">{message}</span>
      <div className="pb-24">
        <h2 className="text-xl text-yellow-700">
          Product Name: ({order.serviceName || ""})
        </h2>
        <h2 className="tex-xl text-yellow-500 p-2">
          Order-status: {order.status || ""}
        </h2>
        <form
          className="xl:shadow-lg lg:shadow-lg p-4 xl:mx-96 lg:mx-96 rounded-lg"
          onSubmit={handleUpdateOrderStatus}
        >
          <label htmlFor="status">Update Order Status</label>
          <br />

          <select
            className="p-2 border-2 xl:p-2 lg:p-2 rounded my-2"
            onChange={handleStatusChange}
          >
            <option value="processing">Processing</option>
            <option value="reject">Reject</option>
            <option value="approved">Approved</option>
          </select>
          <br />
          <input
            className="bg-black  p-2 my-2 text-white rounded shadow"
            type="submit"
            value="Update"
          />
        </form>

        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default OrderDetails;

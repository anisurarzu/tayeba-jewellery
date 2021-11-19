import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const [order, setOrder] = useState();
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  let email = user?.email;
  useEffect(() => {
    fetch("https://obscure-journey-77099.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((data) => data.email === email);
        setOrder(myOrders);
      });
  }, []);

  const handleDeleteOrder = (id) => {
    const check = window.confirm("Are you sure,you want to cancel this order?");

    if (check) {
      const url = `https://obscure-journey-77099.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            const restOrder = order.filter((order) => order._id !== id);
            setOrder(restOrder);
            setMessage("Your Order Canceled Successfully!");
          }
        });
    }
  };
  return (
    <div className="py-12 mr-24">
      <h4 className="text-green-500 ">{message}</h4>
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-6 header py-4">
        <div>Product</div>
        <div>Price</div>
        <div>Order-status</div>
        <div>Cancel</div>
      </div>
      {order?.map((order) => (
        <div key={order._id}>
          <div className="grid grid-cols-2 grid:cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6  border-2 border-dotted  xl:border-b-4 lg:border-b-4  p-6 mx-4 xl:mx-0 lg:mx-0">
            <h3 className="border-r-2">{order.serviceName}</h3>
            <h5 className="border-r-2 ">{order.price}</h5>
            <h5 className="text-blue-900 border-r-2">{order.status}</h5>
            <button onClick={() => handleDeleteOrder(order._id)}>
              <i className="fas fa-trash-alt delete-btn"></i>
            </button>
          </div>
        </div>
      ))}

      <div>
        <Link to="/">
          <button className=" p-2 mt-8 bg-black text-white rounded shadow">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyOrder;

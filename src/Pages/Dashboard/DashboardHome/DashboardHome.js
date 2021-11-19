import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const [orders, setOrders] = useState();
  const { user } = useAuth();
  let email = user?.email;
  useEffect(() => {
    fetch("https://obscure-journey-77099.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((data) => data.email === email);
        setOrders(myOrders);
      });
  }, []);
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
      <div>
        <h1 className="text-2xl font-bold">Welcome To Tayeba Jewellery</h1>{" "}
      </div>
      <div></div>

      <div className="border-2 border-black bg-black rounded w-32 h-32 mt-4">
        <h1 className="text-white text-4xl font-bold">{orders?.length} </h1>
        <span className="text-2xl text-white">Orders</span>
      </div>
    </div>
  );
};

export default DashboardHome;

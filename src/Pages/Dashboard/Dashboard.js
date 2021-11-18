import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddProducts from "./AddProducts/AddProducts";
import AllOrders from "./AllOrders/AllOrders";
import DashboardHome from "./DashboardHome/DashboardHome";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import MyOrder from "./MyOrder/MyOrder";
import OrderDetails from "./OrderDetails/OrderDetails";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
      <div className=" xl:h-96 xl:mr-64 xl:w-52 border-r-2 ml-12">
        <h1 className="text-white">Welcome</h1>
        <Link to="/dashboard" className="p-2 my-2 bg-black text-white">
          DashBoard
        </Link>
        <br />
        <Link to={`${url}/myOrders`}>
          <button className="p-2 my-3 bg-black text-white">My Orders</button>
        </Link>
        <br />
        {admin && (
          <div>
            <Link to={`${url}/updateStatus`}>
              <button className="p-2 my-3 bg-black text-white">
                Order Status
              </button>
            </Link>
            <br />
            <Link to={`${url}/makeAdmin`}>
              <button className="p-2 my-3 bg-black text-white">
                Make Admin
              </button>
            </Link>
            <br />
            <Link to={`${url}/addProducts`}>
              <button className="p-2 my-3 bg-black text-white">
                Add Products
              </button>
            </Link>
            <br />
            <Link to={`${url}/allOrders`}>
              <button className="p-2 my-3 bg-black text-white">
                All Orders
              </button>
            </Link>
          </div>
        )}
      </div>
      <div>
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrder></MyOrder>
          </Route>

          <Route path={`${path}/allOrders`}>
            <AllOrders></AllOrders>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

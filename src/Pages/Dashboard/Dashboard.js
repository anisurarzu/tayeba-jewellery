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
import ManageProducts from "./ManageProducts/ManageProducts";
import MyOrder from "./MyOrder/MyOrder";
import OrderDetails from "./OrderDetails/OrderDetails";
import Payment from "./Payment/Payment";
import Review from "./Review/Review";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 pt-12">
      <div className=" xl:h-96 xl:mr-64 xl:w-52 border-r-2 border-black ml-12 mb-28">
        <h1 className="text-white">Welcome</h1>
        <Link to="/dashboard" className="p-2 my-2 bg-black text-white rounded">
          DashBoard
        </Link>
        <br />
        <Link to={`${url}/myOrders`}>
          <button className="p-2 my-3 bg-black text-white rounded">
            My Orders
          </button>
        </Link>
        <br />
        <Link to={`${url}/reviews`}>
          <button className="p-2 my-3 bg-black text-white rounded">
            Reviews
          </button>
        </Link>
        <br />
        <Link to={`${url}/payment`}>
          <button className="p-2 my-3 bg-black text-white rounded">Pay</button>
        </Link>
        <br />
        {admin && (
          <div>
            <br />
            <Link to={`${url}/makeAdmin`}>
              <button className="p-2 my-3 bg-black text-white rounded">
                Make Admin
              </button>
            </Link>
            <br />
            <Link to={`${url}/addProducts`}>
              <button className="p-2 my-3 bg-black text-white rounded">
                Add Products
              </button>
            </Link>
            <br />
            <Link to={`${url}/allOrders`}>
              <button className="p-2 my-3 bg-black text-white rounded">
                All Orders
              </button>
            </Link>
            <br />
            <Link to={`${url}/manageProducts`}>
              <button className="p-2 my-3 bg-black text-white rounded">
                Manage Product
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
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/reviews`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

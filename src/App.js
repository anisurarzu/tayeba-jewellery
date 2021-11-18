import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import AllProducts from "./Pages/AllProducts/AllProducts/AllProducts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import OrderDetails from "./Pages/Dashboard/OrderDetails/OrderDetails";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/product/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <PrivateRoute path="/order/:orderId">
              <OrderDetails></OrderDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

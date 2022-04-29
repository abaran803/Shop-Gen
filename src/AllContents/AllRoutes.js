import React, { Suspense, useState } from "react";
import classes from "./AllRoutes.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import Loader from "../Components/Loader";
import LoginForm from "../Pages/LoginForm";
import SignUpForm from "../Pages/SignUpForm";
const About = React.lazy(() => import("../Pages/About"));
const Cart = React.lazy(() => import("../Pages/Cart"));
const Category = React.lazy(() => import("../Pages/Category"));
const Contact = React.lazy(() => import("../Pages/Contact"));
const Product = React.lazy(() => import("../Pages/Product"));
const ProductDetail = React.lazy(() => import("../Pages/ProductDetail"));
const MainContent = React.lazy(() => import("../HomePage/MainContent"));

const AllRoutes = (props) => {

  const [userLogin, setUserLogin] = useState();

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {props.loginStatus && <Route path="/about"><About /></Route>}
        {props.loginStatus && <Route path="/contact"><Contact /></Route>}
        {props.loginStatus && <Route path="/category"><Category /></Route>}
        {props.loginStatus && <Route path="/product" exact><Product /></Route>}
        {props.loginStatus && <Route path="/product/category/:category" exact><Product /></Route>}
        {props.loginStatus && <Route path="/product/:id" exact><ProductDetail /></Route>}
        {props.loginStatus && <Route path="/home"><MainContent /></Route>}
        {props.loginStatus && <Route path="/cart"><Cart /></Route>}
        {props.loginStatus && <Route path="/checkout"><Checkout /></Route>}
        {props.loginStatus && <Route path="/loginUser">{props.userLoginStatus ? <Redirect to='home' /> : <LoginForm setLoginStatus={props.setUserLoginStatus} userLogin={true} />}</Route>}
        {props.loginStatus && <Route path="/signupUser">{props.userLoginStatus ? <Redirect to='home' /> : <SignUpForm setLoginStatus={props.setUserLoginStatus} userLogin={true} />}</Route>}
        {props.loginStatus && <Route path="/" exact><Redirect to="/home" /></Route>}
        <Route path="/login">{props.loginStatus ? <Redirect to='/home' /> : <LoginForm setLoginStatus={props.setLoginStatus} />}</Route>
        <Route path="/signup">{props.loginStatus ? <Redirect to='/home' /> : <SignUpForm setLoginStatus={props.setLoginStatus} />}</Route>
        {!props.loginStatus && (
          <Switch>
            <Route path="/signup" exact>
              <Redirect to="/signup" />
            </Route>
            <Route path="*" exact>
              <Redirect to="/login" />
            </Route>
          </Switch>
        )}
        <Route path="*">Item Not Found</Route>
      </Switch>
    </Suspense>
  );
};

export default AllRoutes;

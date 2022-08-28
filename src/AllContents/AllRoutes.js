import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import Loader from "../Components/Loader";
import LoginForm from "../Pages/LoginForm";
import { useSelector } from "react-redux";
import SignUpForm from "../Pages/SignUpForm";
const About = React.lazy(() => import("../Pages/About")); // done
const Cart = React.lazy(() => import("../Pages/Cart"));
const Category = React.lazy(() => import("../Pages/Category")); // done
const Contact = React.lazy(() => import("../Pages/Contact")); // done
const Product = React.lazy(() => import("../Pages/Product"));
const ProductDetail = React.lazy(() => import("../Pages/ProductDetail"));
const MainContent = React.lazy(() => import("../HomePage/MainContent"));

const AllRoutes = (props) => {

  const storeId = useSelector(state => state.storeId.id);

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={`/${storeId}/about`} exact><About /></Route>
        <Route path={`/${storeId}/contact`} exact><Contact /></Route>
        <Route path={`/${storeId}/category`}><Category /></Route>
        <Route path={`/${storeId}/product/category/:category`} exact><Product /></Route>
        <Route path={`/${storeId}/product`} exact><Product /></Route>
        <Route path={`/${storeId}/product/:id`} exact><ProductDetail /></Route>
        <Route path={`/${storeId}/home`}><MainContent storeId={props.storeId} /></Route>
        <Route path={`/${storeId}/cart`}><Cart /></Route>
        <Route path={`/${storeId}/checkout`}><Checkout /></Route>
        <Route path={`/${storeId}/loginUser`}>{props.userLoginStatus ? <Redirect to={`/${storeId}/home`} /> : <LoginForm setLoginStatus={props.setUserLoginStatus} userLogin={true} />}</Route>
        <Route path={`/${storeId}/signupUser`}>{props.userLoginStatus ? <Redirect to={`/${storeId}/home`} /> : <SignUpForm setLoginStatus={props.setUserLoginStatus} />}</Route>
        <Route path={`/${storeId}/`} exact><Redirect to={`/${storeId}/home`} /></Route>
      </Switch>
    </Suspense>
  );
};

export default AllRoutes;

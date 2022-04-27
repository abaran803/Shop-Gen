import React, { Suspense } from "react";
import classes from "./AllRoutes.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Checkout from "../Pages/Checkout";
const About = React.lazy(() => import("../Pages/About"));
const Cart = React.lazy(() => import("../Pages/Cart"));
const Category = React.lazy(() => import("../Pages/Category"));
const Contact = React.lazy(() => import("../Pages/Contact"));
const Product = React.lazy(() => import("../Pages/Product"));
const ProductDetail = React.lazy(() => import("../Pages/ProductDetail"));
const MainContent = React.lazy(() => import("../HomePage/MainContent"));

const AllRoutes = () => {
  return (
    <Suspense fallback={<div className={classes.loading}></div>}>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/product/category/:category" exact>
          <Product />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
        <Route path="/home">
          <MainContent />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="*">Item Not Found</Route>
      </Switch>
    </Suspense>
  );
};

export default AllRoutes;

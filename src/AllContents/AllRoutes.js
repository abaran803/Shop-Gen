import { Redirect, Route, Switch } from "react-router-dom";
import MainContent from "../HomePage/MainContent";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Category from "../Pages/Category";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import ProductDetail from "../Pages/ProductDetail";

const AllRoutes = () => {
  return (
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
      <Route path="/product/:id">
        <ProductDetail />
      </Route>
      <Route path="/home">
        <MainContent />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/E-Commerce">
        <MainContent />
      </Route>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="*">Item Not Found</Route>
    </Switch>
  );
};

export default AllRoutes;

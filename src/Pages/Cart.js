import React, { Suspense, useEffect } from "react";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromFirebase } from "../ReduxComponents/CounterSlice";
const CartItems = React.lazy(() => import("./CartItems"));
const TotalCharge = React.lazy(() => import("./TotalCharge"));

const Cart = () => {
  const count = useSelector((state) => state.counter.length);
  const cartItems = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchItemsHandler() {
      const res = await fetch(
        "https://e-commerce-cb57e-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await res.json();
      if (!data) {
        return dispatch(fetchFromFirebase({ value: [], length: 0 }));
      }
      const allData = [];
      for (const key in data) {
        allData.push(data[key]);
      }
      dispatch(fetchFromFirebase({value: allData, length: allData.length}));
    }
    fetchItemsHandler();
  }, [dispatch]);
  return (
    <section className="cart py-5 my-2" id="cart">
      <div className="container">
        <div className="section_title text-center mb-3">
          <h1 className="text-capitalize">Cart</h1>
        </div>
        <div className="row bg-cart_1 rounded">
          <div className="col-md-8 border-right">
            <div className="mb-3">
              <div className="pt-4">
                <Suspense fallback={<div className={classes.loading}></div>}>
                  <h5 className="mb-4">
                    Cart (<span>{count}</span> items)
                  </h5>
                  {cartItems.map((item) => (
                    <CartItems item={item} key={item.id} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
          <div className="col-md-4 rounded">
            <Suspense fallback={<div className={classes.loading}></div>}>
              <TotalCharge />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

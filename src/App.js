import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./AllContents/AllRoutes";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import { fetchFromFirebase } from "./ReduxComponents/CounterSlice";

export default function App() {
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
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

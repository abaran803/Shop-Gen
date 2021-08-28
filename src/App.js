import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import AllRoutes from "./AllContents/AllRoutes";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </Router>
  );
}
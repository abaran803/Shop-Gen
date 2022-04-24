import React, { Suspense, useState } from "react";
import classes from "./Product.module.css";
import {useSelector} from "react-redux";
const Items = React.lazy(() => import("./Items"));

const Product = () => {
  const {items, categories} = useSelector(state => state.siteData.data);
  const [rangeValue, setRangeValue] = useState(500);
  const changeHandler = (e) => {
    setRangeValue(e.target.value);
  };
  const selectedItems = (items ? items.filter((item) => item.price <= rangeValue) : null);
  return (
    <section className="products py-5 my 5" id="products">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h1 className="text-capitalize">Products</h1>
        </div>
        <div className="row">
          <div className="col-md-3 border-right mb-small-5">
            <h4 className="mb-5 border-bottom">Filters</h4>
            <div className="mb-5">
              <label>
                <b>Category</b>
              </label>
              <ul className="list-group">
                {categories ? categories.map(category => (
                  <li className="list-group-item" key={category}>{category}</li>
                )) : <h3>No data found</h3>}
              </ul>
            </div>
            <div>
              <form>
                <div className="form-group">
                  <label>
                    <b>Price</b>
                  </label>
                  <input
                    onChange={changeHandler}
                    type="range"
                    min="100"
                    max="1000"
                    step="100"
                    className="form-control-range"
                    value={rangeValue}
                  />
                </div>
              </form>
              <div className="d-flex justify-content-between">
                <label>₹{rangeValue}</label>
                <label>₹1000</label>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row mb-5">
              <Suspense fallback={<div className={classes.loading}></div>}>
              {selectedItems ? selectedItems.map((item) => (
                <Items
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  stars={item.stars}
                  id={item.id}
                    key={item.id}
                />
              )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

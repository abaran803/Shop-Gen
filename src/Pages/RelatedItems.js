import React, { Component, Fragment, useEffect, useState } from "react";
import { getProducts } from "../API/api";

export default () => {

  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const getItems = async (count) => {
      const value = await getProducts(count);
      const data = await value.json();
      setIsLoading(false);
      setItems(data);
    }
    getItems(3);
  }, [])

  return (
    <div className='container'>
      <section className="related-products py-5 my-5" id="related_products">
        <div className="title">
          <h3>Related Products</h3>
        </div>
        <div className="row mt-5">
          {items ? items.map((item) => (
            <div className="col-md-4 col-6">
              <div className="border border-dark rounded shadow text-center p-3 h-100">
                <div className="mb-4">
                  <img
                    src={item.image}
                    alt=""
                    className="img img-fluid"
                    style={{height: "300px"}}
                  />
                </div>
                <div>
                  <a href="/">
                    <h5>{item.title}</h5>
                  </a>
                </div>{" "}
              </div>
            </div>
          )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
        </div>
      </section>
    </div>
  );
}
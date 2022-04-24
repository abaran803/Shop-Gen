import React, { Component, Fragment } from "react";

export default class RelatedItems extends Component {
  render() {
    return (
      <div className='container'>
        <section className="related-products py-5 my-5" id="related_products">
          <div className="title">
            <h3>Related Products</h3>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 col-6">
              <div className="border border-dark rounded shadow text-center p-3">
                <div className="mb-4">
                  <img
                    src="https://us.123rf.com/450wm/peshkov/peshkov1904/peshkov190400211/120870898-hanger-with-empty-black-t-shirt-hanging-on-brick-wall-background-with-sunlight-shop-print-ad-concept.jpg?ver=6"
                    alt=""
                    className="img img-fluid"
                  />
                </div>
                <div>
                  <a href="/">
                    <h5>Dress2 with details</h5>
                  </a>
                </div>{" "}
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="border border-dark rounded shadow text-center p-3">
                <div className="mb-4">
                  <img
                    src="https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg"
                    alt=""
                    className="img img-fluid"
                  />
                </div>
                <div>
                  <a href="/">
                    <h5>Dress3 with details</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="border border-dark rounded shadow text-center p-3">
                <div className="mb-4">
                  <img
                    src="https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2020/11/T-Shirt-Mock-Up-Hanger-1.jpg"
                    alt=""
                    className="img img-fluid"
                  />
                </div>
                <div>
                  <a href="/">
                    <h5>Dress4 with details</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const Checkout = () => {
  return (
      <section className="Checkout py-5 my-5" id="Checkout">
        <div className="container">
          <div className="section_title text-center mb-5">
            <div className="text-capitalize">Checkout</div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="card bg_checkout_1 pb-5">
                <div className="card-body">
                  <h5 className="mbb-5">Bolling details</h5>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-0 mb-lg-4">
                        <label for="firstName">First Name</label>
                        <input
                          type="text"
                          className="form-control mb-0 mb-lg-2"
                          id="firstName"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-0 mb-lg-4">
                        <label for="lastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control mb-0 mb-lg-2"
                          id="lastName"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-0 mb-lg-4">
                        <label for="form18">Phone</label>
                        <input
                          type="number"
                          className="form-control mb-0 mb-lg-2"
                          id="form18"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-0 mb-lg-4">
                        <label for="lastName">Email Address</label>
                        <input
                          type="email"
                          className="form-control mb-0 mb-lg-2"
                          id="form19"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap">
                      <div className="w-100">
                        <label>Country</label>
                        <select className="custom-select form-group">
                          <option value="" selected>
                            Choose your option
                          </option>
                          <option value="1">Option1</option>
                          <option value="2">Option2</option>
                          <option value="3">Option3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="form14">Address Line 1</label>
                      <input
                        type="text"
                        id="form14"
                        placeholder="House number and street name"
                        className="form-control"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="order_confirmation.html"
                        className="btn btn-primary"
                      >
                        <i className="fa fa-check mr-2"></i>Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 bg_checkout_1 h-25 rounded">
              <div className="mb-3">
                <div className="pt-4">
                  <h5 className="mb-3">Order summary</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                      <span>Product name 1</span>
                      <span>x2</span>
                      <span>$25.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                      <span>Product name 2</span>
                      <span>x2</span>
                      <span>$25.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Checkout;
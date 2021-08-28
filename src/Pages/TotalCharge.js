const TotalCharge = () => {
  return (
    <div className="mb-3">
      <div className="pt-4">
        <h5 className="mb-3">Order summary</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
            <span>Product name 1</span>
            <span>x2</span>
            <span>₹25.98</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
            <span>Product name 2</span>
            <span>x2</span>
            <span>₹25.98</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span>
              <strong>₹53.98</strong>
            </span>
          </li>
        </ul>
        <a href="checkout.html" className="btn btn-primary btn-block">
          Go to Checkout
        </a>
      </div>
    </div>
  );
};

export default TotalCharge;

import { Link } from "react-router-dom";

const TotalCharge = ({cartItems}) => {

  let sum = 0;
  const ownerId = JSON.parse(localStorage.getItem('ownerData'))["_id"];

  return (
    <div className="mb-3">
      <div className="pt-4">
        <h5 className="mb-3">Order summary</h5>
        <ul className="list-group list-group-flush">
          {cartItems.map((item, index) => {
            sum += Number(item.price) * Number(item.quantity);
            return (<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2" key={index}>
              <span>{item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}</span>
              <span>x{item.quantity}</span>
              <span>${Number(item.price) * Number(item.quantity)}</span>
            </li>)
          })}
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span>
              <strong>${sum}</strong>
            </span>
          </li>
        </ul>
        <Link to={`/${ownerId}/checkout`} className="btn btn-primary btn-block">
          Go to Checkout
        </Link>
      </div>
    </div>
  );
};

export default TotalCharge;

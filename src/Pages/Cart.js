import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import TotalCharge from "./TotalCharge";

const Cart = () => {
  const count = useSelector((state) => state.counter.length);
  const cartItems = useSelector((state) => state.counter.value);
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
                <h5 className="mb-4">
                  Cart (<span>{count}</span> items)
                </h5>
                {cartItems.map((item) => (
                  <CartItems item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4 rounded">
            <TotalCharge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { removeAllItem, removeOneItem } from "../ReduxComponents/CounterSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const removeCurrentItem = () => {
    dispatch(removeAllItem(props.item));
  };
  const reduceCurrentItem = () => {
    dispatch(removeOneItem(props.item));
  };
  return (
    <Fragment>
      <div className="row mb-4">
        <div className="col-md-5 col-lg-3 col-xl-3">
          <div className="rounded mb-3 mb-md-0">
            <img
              src={props.item.image}
              alt=""
              className="img-fluid w-100 rounded"
            />
          </div>
        </div>
        <div className="col-md-7 col-lg-9 col-xl-9">
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{props.item.name}</h5>
                <p className="mb-3 text-muted text-uppercase small">
                  {props.item.type}
                </p>
                <p className="mb-3 text-muted text-uppercase small">
                  Color: {props.item.color}
                </p>
                <p className="mb-3 text-muted text-uppercase small">
                  Size: {props.item.size}
                </p>
              </div>
              <div>
                <div className="mb-0 w-100">
                  <button
                    onClick={reduceCurrentItem}
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                <small className="form-text text-muted text-center">
                  (Note, {props.item.quantity} piece)
                </small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-item-center">
              <div>
                <a
                  href="javascript:;"
                  type="button"
                  className="small text-uppercase mr-3"
                  onClick={removeCurrentItem}
                >
                  <i className="fas fa-trash-alt mr-1"></i> Remove item{" "}
                </a>
              </div>
              <p className="mb-0">
                <span>
                  <strong id="summary">₹{props.item.totalPrice}</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4" />
    </Fragment>
  );
};

export default CartItems;

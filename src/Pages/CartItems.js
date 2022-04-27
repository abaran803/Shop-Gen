import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {addOneItem, removeAllCartItem, removeOneItem} from "../ReduxComponents/CounterSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const removeCurrentItem = () => {
    dispatch(removeAllCartItem(props.item));
  };
  const reduceCurrentItem = () => {
    dispatch(removeOneItem(props.item));
  };
  const addCurrentItem = () => {
    dispatch(addOneItem(props.item));
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
                <h5>{props.item.title}</h5>
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
                <div className="mb-0 w-100 d-flex justify-content-around">
                  <button
                    onClick={reduceCurrentItem}
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <button
                    onClick={addCurrentItem}
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <small className="form-text text-muted text-center">
                  (Note, {props.item.quantity} piece)
                </small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-item-center">
              <div>
                <Link
                  to="/cart"
                  type="button"
                  className="small text-uppercase mr-3"
                  onClick={removeCurrentItem}
                >
                  <i className="fas fa-trash-alt mr-1"></i> Remove item{" "}
                </Link>
              </div>
              <p className="mb-0">
                <span>
                  <strong id="summary">${props.item.price}</strong>
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

import { Link } from "react-router-dom";
import classes from "./LatestProducts.module.css";

const LatestProducts = (props) => {
  return (
    <div className="col-md-4 col-12">
      <div className={`single_product shadow text-center p-1 ${classes.blockSize}`}>
        <div className="product_img">
          <Link to="/product">
            <img src={props.item.image} alt="shirt1" className={classes.imageOrientation} />
          </Link>
          {props.item.isNew && (
            <div className="new_product">
              <span className="badge py-2 px-3 badge-pill badge-danger">
                New
              </span>
            </div>
          )}
        </div>
        <div className="product-caption my-3">
          <div className="product-rating">{props.item.stars}</div>
          <h4>
            <Link to="/product">{props.item.title}</Link>
          </h4>
          <div className="price">
            <b>
              <span className="mr-1">₹</span>
              <span>{props.item.price}</span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
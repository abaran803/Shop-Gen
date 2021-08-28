import classes from "./Items.module.css";

import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div class="col-md-4 col-12 mb-4">
      <div class="single_product shadow text-center p-1">
        <div class="product_img">
          <Link to={"/product/" + props.id}>
            <img
              src={props.image}
              class={`img img-fluid ${classes.imageOrientation}`}
              alt=""
            />
          </Link>
        </div>
        <div class="product-caption my-3">
          {props.stars}
          <h5>
            <Link to={"/product/" + props.id}>{props.title}</Link>
          </h5>
          <div class="price">
            <b>
              <span class="mr-1">₹</span>
              <span>{props.price}</span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;

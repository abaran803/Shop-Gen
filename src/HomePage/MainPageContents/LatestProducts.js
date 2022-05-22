import { Link } from "react-router-dom";
import classes from "./LatestProducts.module.css";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const LatestProducts = (props) => {

    const storeId = useSelector(state => state.storeId.id);

    return (
        <div className="col-md-4 col-12">
            <div className={`single_product shadow text-center p-4 ${classes.blockSize}`}>
                <div className="product_img">
                    <Link to={`/${storeId}/product/${props.id}`}>
                        <img src={props.item.image} alt="shirt1" className={classes.imageOrientation} />
                    </Link>
                    <div className="new_product">
                        <span className="badge py-2 px-3 badge-pill badge-danger">
                            New
                        </span>
                    </div>
                </div>
                <div className="product-caption my-3">
                    <div className="product-rating">{
                        // <Fragment>
                        //     <i className={props.item.stars[0]}></i>
                        //     <i className={props.item.stars[1]}></i>
                        //     <i className={props.item.stars[2]}></i>
                        //     <i className={props.item.stars[3]}></i>
                        //     <i className={props.item.stars[4]}></i>
                        // </Fragment>
                    }</div>
                    <h4>
                        <Link to={`/${storeId}/product`}>{props.item.title}</Link>
                    </h4>
                    <div className="price">
                        <b>
                            <span className="mr-1">$</span>
                            <span>{props.item.price}</span>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;

import classes from "./Items.module.css";
import {Link} from "react-router-dom";
import {Fragment} from "react";
import {useSelector} from "react-redux";

const Items = (props) => {

    const storeId = useSelector(state => state.storeId.id);

    return (
        <div className="col-md-4 col-12 mb-4">
            <div className="single_product shadow text-center p-3" style={{height: "100%"}}>
                <div className="product_img">
                    <Link to={`/${storeId}/product/${props.id}`}>
                        <img
                            src={props.image}
                            className={`img img-fluid ${classes.imageOrientation}`}
                            alt=""
                            style={{height: "250px"}}
                        />
                    </Link>
                </div>
                <div className="product-caption my-3">
                    {
                        <Fragment>
                            {/* <i className={props.stars[0]}></i>
                            <i className={props.stars[1]}></i>
                            <i className={props.stars[2]}></i>
                            <i className={props.stars[3]}></i>
                            <i className={props.stars[4]}></i> */}
                        </Fragment>
                    }
                    <h5>
                        <Link to={`/${storeId}/product/${props.id}`}>{props.title}</Link>
                    </h5>
                    <div className="price">
                        <b>
                            <span className="mr-1">$</span>
                            <span>{props.price}</span>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;

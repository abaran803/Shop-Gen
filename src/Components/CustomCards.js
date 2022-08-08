import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";

const CustomCards = ({ cardImage, cardTitle, cardDesc, cardType, cardPrice, itemLink, baseURL }) => {
    return (
        <div className="single_product shadow text-center p-3" style={{ height: "100%" }}>
            <div className="product_img">
                <Link to={`/${baseURL}`}>
                    <img
                        src={cardImage}
                        alt="Card Image"
                        className="img img-fluid rounded"
                        style={{ height: "300px" }}
                    />
                </Link>
            </div>
            <div className="product_caption my-3">
                {cardType === 'Product' && <Fragment>
                    {/* <i className={props.stars[0]}></i>
                            <i className={props.stars[1]}></i>
                            <i className={props.stars[2]}></i>
                            <i className={props.stars[3]}></i>
                            <i className={props.stars[4]}></i> */}
                </Fragment>}
                {cardType === 'Category' && <h4>
                    <Link to={itemLink}>{cardTitle}</Link>
                </h4>}
                {cardType === 'Product' && <h5>
                    <Link to={itemLink}>{cardTitle}</Link>
                </h5>}
            </div>
            {cardType === 'Product' && <div className="price">
                <b>
                    <span className="mr-1">$</span>
                    <span>{cardPrice}</span>
                </b>
            </div>}
            {cardDesc && <div className="mt-3">
                <p>
                    {cardDesc}
                </p>
            </div>}
        </div>
    )
}

export default CustomCards
import classes from "./MainContent.module.css";
import React, { Fragment, Suspense } from "react";
import {useSelector} from "react-redux";
const Features = React.lazy(() => import("./MainPageContents/Features"));
const LatestProducts = React.lazy(() =>
  import("./MainPageContents/LatestProducts")
);
const ShopByCategory = React.lazy(() =>
  import("./MainPageContents/ShopByCategory")
);

const MainContent = () => {

  const {categoryItems, latestProducts, features} = useSelector(state => state.siteData.data);

  return (
    <div>
      <div className="header_carousel" id="header_carousel">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <Suspense fallback={<div className={classes.loading}></div>}>
        <div className="shop_by_category py-5 my-5" id="shop_by_category">
          <div className="container-fluid">
            <div className="section_title text-center mb-5">
              <h1 className="text-capitalize">Shop By category</h1>
            </div>
            <div className="row">
              {categoryItems ? categoryItems.map((item) => (
                <ShopByCategory image={item.image} key={item.image} />
              )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
            </div>
          </div>
        </div>
        <section className="products py-5 my-5 bg-light" id="products">
          <div className="container">
            <div className="section_title text-center mb-5">
              <h1 className="text-capitalize">Latest Products</h1>
            </div>
            <div className="row mb-5">
              {latestProducts ? latestProducts.map((item) => (
                <LatestProducts item={item} key={item.title} />
              )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
            </div>
          </div>
        </section>
        <section className="feature py-5 mt-5" id="feature">
          <div className="container">
            <div className="section_title text-center mb-5">
              <h1 className="text-capitalize">Our Features</h1>
            </div>
            <div className="row">
              {features ? features.map((item) => (
                <Features item={item} key={item.title} />
              )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default MainContent;

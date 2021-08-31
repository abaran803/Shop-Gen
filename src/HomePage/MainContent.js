import classes from "./MainContent.module.css";
import React, { Fragment, Suspense } from "react";
const Features = React.lazy(() => import("./MainPageContents/Features"));
const LatestProducts = React.lazy(() =>
  import("./MainPageContents/LatestProducts")
);
const ShopByCategory = React.lazy(() =>
  import("./MainPageContents/ShopByCategory")
);

const MainContent = () => {
  const categoryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    },
  ];
  const latestProducts = [
    {
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      isNew: true,
      stars: (
        <Fragment>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star low-star"></i>
          <i className="far fa-star low-star"></i>
        </Fragment>
      ),
      title: "Green Dress with details",
      price: 400,
    },
    {
      image:
        "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      isNew: false,
      stars: (
        <Fragment>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star low-star"></i>
          <i className="far fa-star low-star"></i>
        </Fragment>
      ),
      title: "Black Dress with details",
      price: 800,
    },
    {
      image:
        "https://images.unsplash.com/photo-1503672902329-038a842c63b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
      isNew: true,
      stars: (
        <Fragment>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star low-star"></i>
          <i className="far fa-star low-star"></i>
        </Fragment>
      ),
      title: "Yellow Dress with details",
      price: 600,
    },
  ];
  const features = [
    {
      iconClass: "fas fa-shipping-fast fa-3x mb-3 pt-2",
      title: "Free Shipping Method",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto atque sequi molestiae, illum quaerat suscipit neque maxime velit voluptates pariatur consequuntur voluptate beatae, sapiente magnam dolores placeat provident eos! Aperiam sint veritatis ullam totam voluptatem itaque deleniti nobis explicabo eligendi?",
    },
    {
      iconClass: "fas fa-shipping-fast fa-3x mb-3 pt-2",
      title: "Secure Payment System",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo vero hic odio, nobis possimus, magnam veniam, suscipit aliquid vitae at sit? Architecto, fuga velit facere quae rem fugiat sunt quasi.",
    },
    {
      iconClass: "fas fa-shipping-fast fa-3x mb-3 pt-2",
      title: "Free Shipping",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptate molestiae ullam! Minima deleniti, ipsam porro, quibusdam sint numquam voluptate fugiat nostrum necessitatibus excepturi inventore mollitia quis animi voluptatibus magnam pariatur enim voluptatum officia debitis!",
    },
  ];
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
              {categoryItems.map((item) => (
                <ShopByCategory image={item.image} key={item.image} />
              ))}
            </div>
          </div>
        </div>
        <section className="products py-5 my-5 bg-light" id="products">
          <div className="container">
            <div className="section_title text-center mb-5">
              <h1 className="text-capitalize">Latest Products</h1>
            </div>
            <div className="row mb-5">
              {latestProducts.map((item) => (
                <LatestProducts item={item} key={item.title} />
              ))}
            </div>
          </div>
        </section>
        <section className="feature py-5 mt-5" id="feature">
          <div className="container">
            <div className="section_title text-center mb-5">
              <h1 className="text-capitalize">Our Features</h1>
            </div>
            <div className="row">
              {features.map((item) => (
                <Features item={item} key={item.title} />
              ))}
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default MainContent;

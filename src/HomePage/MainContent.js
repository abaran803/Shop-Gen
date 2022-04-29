import classes from "./MainContent.module.css";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategories, getProducts } from "../API/api";
import Loader from "../Components/Loader";
const Features = React.lazy(() => import("./MainPageContents/Features"));
const LatestProducts = React.lazy(() =>
  import("./MainPageContents/LatestProducts")
);
const ShopByCategory = React.lazy(() =>
  import("./MainPageContents/ShopByCategory")
);

const MainContent = () => {

  const { features } = useSelector(state => state.siteData.data);
  const [categoryItems, setCategoryItems] = useState();
  const [latestProducts, setLatestProducts] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getCategoriesData = async (count) => {
      setIsLoading(true);
      const value = await getCategories(count);
      const data = await value.json();
      setIsLoading(false);
      setCategoryItems(data);
    }
    getCategoriesData(3);
    const getProductsData = async (count) => {
      setIsLoading(true);
      const value = await getProducts(count);
      const data = await value.json();
      setIsLoading(false);
      setLatestProducts(data);
    }
    getProductsData(3);
  }, [])

  const handleLoading = (loadingState) => {
    setIsLoading(loadingState);
  }

  if(isLoading) {
    return <Loader />
  }

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
                src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="d-block w-100"
                alt="..."
                style={{height: "95vh"}}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
                style={{height: "95vh"}}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
                style={{height: "95vh"}}
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
      <div className="shop_by_category py-5 my-5" id="shop_by_category">
        <div className="container-fluid">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Shop By category</h1>
          </div>
          <div className="row">
            {categoryItems ? categoryItems.map((item) => (
              <ShopByCategory handleLoading={handleLoading} image={item.image} name={item.category} key={item.id} />
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
              <LatestProducts handleLoading={handleLoading} item={item} key={item.id} id={item.id} />
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
              <Features handleLoading={handleLoading} item={item} key={item.title} />
            )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;

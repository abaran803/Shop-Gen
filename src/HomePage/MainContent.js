import classes from "./MainContent.module.css";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategories, getProducts } from "../API/api";
import Loader from "../Components/Loader";
import CustomCarousel from "../Components/CustomCarousel";
const Features = React.lazy(() => import("./MainPageContents/Features"));
const LatestProducts = React.lazy(() =>
  import("./MainPageContents/LatestProducts")
);
const ShopByCategory = React.lazy(() =>
  import("./MainPageContents/ShopByCategory")
);

const MainContent = ({storeId}) => {

  const { features } = useSelector(state => state.siteData.data);
  const [categoryItems, setCategoryItems] = useState();
  const [latestProducts, setLatestProducts] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getCategoriesData = async (count) => {
      setIsLoading(true);
      const value = await getCategories(count, storeId);
      const data = await value.json();
      setIsLoading(false);
      setCategoryItems(data.data);
    }
    getCategoriesData(3);
    const getProductsData = async (count) => {
      setIsLoading(true);
      const value = await getProducts(count, storeId);
      const data = await value.json();
      setIsLoading(false);
      setLatestProducts(data.data);
    }
    getProductsData(3);
  }, [storeId])

  const handleLoading = (loadingState) => {
    setIsLoading(loadingState);
  }

  if(isLoading) {
    return <Loader />
  }

  return (
    <div>
      <CustomCarousel />
      <div className="shop_by_category py-5 my-5" id="shop_by_category">
        <div className="container">
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

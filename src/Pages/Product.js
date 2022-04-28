import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategories, getItemsByCategory, getProducts } from "../API/api";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
const Items = React.lazy(() => import("./Items"));

const Product = () => {
  const pageCategory = useParams();
  const [categories, setCategories] = useState();
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [rangeValue, setRangeValue] = useState(500);
  useEffect(() => {
    setIsLoading(true);
    const getItemsByCategoryData = async (category) => {
      if(!category) {
        const value = await getProducts(50);
        const data = await value.json();
        setIsLoading(false);
        setItems(data);
      } else {
        const value = await getItemsByCategory(category);
        const data = await value.json();
        setIsLoading(false);
        setItems(data);
      }
    }
    getItemsByCategoryData(pageCategory.category);
  }, [pageCategory])

  useEffect(() => {
    const getCategoriesData = async (count) => {
      setIsLoading(true);
      const value = await getCategories(count);
      const data = await value.json();
      setCategories(data);
    }
    getCategoriesData(4);
  }, [])
  const changeHandler = (e) => {
    setRangeValue(e.target.value);
  };
  const selectedItems = (items ? items.filter((item) => item.price <= rangeValue) : null);
  return (
    <section className="products py-5 my 5" id="products">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h1 className="text-capitalize">{pageCategory.category ? pageCategory.category : "All Products"}</h1>
        </div>
        <div className="row">
          <div className="col-md-3 border-right mb-small-5">
            <h4 className="mb-5 border-bottom">Filters</h4>
            <div className="mb-5">
              <label>
                <b>Category</b>
              </label>
              <ul className="list-group">
                {categories ? categories.map(category => (
                  <li className="list-group-item" key={category.id}>
                    <Link to={`/product/category/${category.category}`}>{category.category}</Link>
                    </li>
                )) : <Loader />}
              </ul>
            </div>
            <div>
              <form>
                <div className="form-group">
                  <label>
                    <b>Price</b>
                  </label>
                  <input
                    onChange={changeHandler}
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    className="form-control-range"
                    value={rangeValue}
                  />
                </div>
              </form>
              <div className="d-flex justify-content-between">
                <label>${rangeValue}</label>
                <label>$1000</label>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row mb-5">
              {isLoading ? <Loader /> : selectedItems ? selectedItems.map((item) => (
                <Items
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  // stars={item.stars}
                  id={item.id}
                    key={item.id}
                />
              )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

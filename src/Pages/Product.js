import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCategories} from "../API/api";
import {Link} from "react-router-dom";
import Loader from "../Components/Loader";
import {useSelector} from "react-redux";

const Items = React.lazy(() => import("./Items"));

const Product = () => {
    const pageCategory = useParams();
    const [items, setItems] = useState();
    const [categories, setCategories] = useState();
    const [isLoading, setIsLoading] = useState('idle');
    const [isLoadingCategory, setIsLoadingCategory] = useState('idle');
    const [rangeValue, setRangeValue] = useState(500);
    const storeId = useSelector(state => state.storeId.id);
    useEffect(() => {
        setIsLoading('loading');
        const count = 50;
        const url = process.env.REACT_APP_BACKEND_URL;
        const category = pageCategory.category;
        fetch(`${url}/${!category ? 'getProducts' : 'getProductsByCategory'}/${storeId}/${!category ? count : category}`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Products not Found");
                }
                return res.json();
            })
            .then(data => {
                setItems(data);
                setIsLoading('success');
            })
            .catch(err => {
                setIsLoading(err.message)
            })
    }, [pageCategory])

    useEffect(() => {
        const getCategoriesData = async (count) => {
            setIsLoadingCategory('loading');
            const value = await getCategories(count);
            const data = await value.json();
            setIsLoadingCategory('success')
            setCategories(data);
        }
        getCategoriesData(4);
    }, [])
    const changeHandler = (e) => {
        setRangeValue(e.target.value);
    };
    const selectedItems = (items ? items.filter((item) => item.price <= rangeValue) : null);
    
    if(isLoading === "loading" && isLoadingCategory === "loading") {
        return <Loader />
    }

    if (isLoading !== 'success' && isLoading !== 'loading' && isLoading !== 'idle') {
        return <div>{isLoading}</div>
    }

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
                                        <Link
                                            to={`/${storeId}/product/category/${category.category}`}>{category.category}</Link>
                                    </li>
                                )) : <Loader/>}
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
                            {isLoading === 'success' ? selectedItems.map((item) => (
                                <Items
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    // stars={item.stars}
                                    id={item.id}
                                    key={item.id}
                                />
                            )) : <Loader />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;

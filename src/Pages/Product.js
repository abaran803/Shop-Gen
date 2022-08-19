import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategories } from "../API/api";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { useSelector } from "react-redux";
import CustomCards from "../Components/CustomCards";
import CustomFilter from "../Components/CustomFilter";

const Product = () => {
    const pageCategory = useParams();
    const [items, setItems] = useState();
    const [categories, setCategories] = useState();
    const [isLoading, setIsLoading] = useState('idle');
    const [isLoadingCategory, setIsLoadingCategory] = useState('idle');
    const [rangeValue, setRangeValue] = useState(500);
    const [showFilter, setShowFilter] = useState();
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
                setItems(data.data);
                setIsLoading('success');
            })
            .catch(err => {
                setIsLoading(err.message)
            })
    }, [pageCategory])

    useEffect(() => {
        setShowFilter(window.innerWidth > 600 ? true : false);
    }, [window])
    useEffect(() => {
        const getCategoriesData = async (count) => {
            setIsLoadingCategory('loading');
            const data = await getCategories(count, storeId);
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
                        <CustomFilter showFilter={showFilter} setShowFilter={setShowFilter} categories={categories} storeId={storeId} rangeValue={rangeValue} changeHandler={changeHandler} />
                    </div>
                    <div className="col-md-9">
                        <div className="row mb-5">
                            {isLoading === 'success' ? selectedItems.map((item) => (
                                <div className="col-md-4 col-12 mb-4">
                                    <CustomCards key={item.id} baseURL={`${storeId}/product/${item.id}`} cardImage={item.image} itemLink={`/${storeId}/product/${item.id}`} cardTitle={item.title} cardType={'Product'} cardPrice={item.price} />
                                </div>
                            )) : <Loader />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;

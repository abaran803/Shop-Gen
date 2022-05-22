import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";

const Category = () => {

    const storeId = useSelector(state => state.storeId.id);
    const [categories, setCategories] = useState();
    const [isLoading, setIsLoading] = useState('idle');

    useEffect(() => {
        setIsLoading('loading');
        const count = 4;
        const url = "http://localhost:8080";
        fetch(`${url}/getCategories/${storeId}/${count}`)
            .then(res => {
                if(!res.ok) {
                    throw Error("Categories not Found");
                }
                return res.json();
            })
            .then(data => {
                setCategories(data);
                setIsLoading('success');
            })
            .catch(err => {
                setIsLoading(err.message)
            })
    }, [])

    if(isLoading === 'loading' || isLoading === 'idle') {
        return <Loader />
    }

    if(isLoading !== 'success') {
        return <div>{isLoading}</div>
    }

    return (
        <div className="product py-5 my-5 bg-light" id="products">
            <div className="container">
                <div className="section_title text-center mb-5">
                    <h1 className="text-capitalize">Categories</h1>
                </div>
                <div className="row mb-5">
                    {categories ? categories.map((category => (
                        <div className="col-md-4 mb-4 col-12" key={category.id}>
                            <div className="single_product shadow text-center p-3" style={{ height: "100%" }}>
                                <div className="product_img">
                                    <Link to={`/${storeId}/product/category/${category.category}`}>
                                        <img
                                            src={category.image}
                                            alt=""
                                            className="img img-fluid rounded"
                                            style={{ height: "300px" }}
                                        />
                                    </Link>
                                </div>
                                <div className="product_caption my-3">
                                    <h4>
                                        <a href={category.productLink}>{category.category}</a>
                                    </h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))) : <h2 className='w-100 text text-center mt-5'>No data found</h2>}
                </div>
            </div>
        </div>
    );
};

export default Category;

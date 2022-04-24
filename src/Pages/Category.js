import {useSelector} from "react-redux";

const Category = () => {

    const categories = useSelector(state => state.siteData.data.categoriesPageData);

    return (
        <div className="product py-5 my-5 bg-light" id="products">
            <div className="container">
                <div className="section_title text-center mb-5">
                    <h1 className="text-capitalize">Categories</h1>
                </div>
                <div className="row mb-5">
                    {categories ? categories.map((category => (
                        <div className="col-md-4 mb-4 col-12" key={category.id}>
                            <div className="single_product shadow text-center p-1">
                                <div className="product_img">
                                    <a href={category.productLink}>
                                        <img
                                            src={category.productImage}
                                            alt=""
                                            className="img img-fluid rounded"
                                        />
                                    </a>
                                </div>
                                <div className="product_caption my-3">
                                    <h4>
                                        <a href={category.productLink}>{category.productName}</a>
                                    </h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        {category.productDescription}
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

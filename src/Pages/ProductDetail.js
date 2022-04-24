import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import RelatedItems from "./RelatedItems";
import {addNewCartItem} from "../ReduxComponents/CounterSlice";

const ProductDetail = (props) => {
  const {items} = useSelector(state => state.siteData.data)
  const dispatch = useDispatch();
  const pageId = useParams();
  const ind = (items ? items.findIndex((item) => item.id === pageId.id) : -1);
  if (ind === -1) {
    return <div>Item not found</div>;
  }
  const selectedItem = items[ind];
  const addToCart = () => {
    const item = selectedItem;
    alert("Hwllll")
    const newItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: 1,
      type: item.type,
      color: item.color,
      size: item.size,
    };
    dispatch(addNewCartItem(newItem));
  };
  return (
    <div>
      <div className="product_detail py-5 my-5" id="product_detail">
        <div className="container">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">product detail</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide shadow rounded"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      >
                        <img
                          src={selectedItem.image}
                          className="d-block w-100 img img-fluid rounded"
                          alt=""
                          width="50px"
                        />
                      </li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      >
                        <img
                          src="https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg"
                          className="d-block w-100 img img-fluid rounded"
                          alt=""
                          width="15px"
                        />
                      </li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      >
                        <img
                          src="https://us.123rf.com/450wm/peshkov/peshkov1904/peshkov190400211/120870898-hanger-with-empty-black-t-shirt-hanging-on-brick-wall-background-with-sunlight-shop-print-ad-concept.jpg?ver=6"
                          className="d-block w-100 img img-fluid rounded"
                          alt=""
                          width="15px"
                        />
                      </li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={selectedItem.image}
                          className="d-block w-100 img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg"
                          className="d-block w-100 img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://us.123rf.com/450wm/peshkov/peshkov1904/peshkov190400211/120870898-hanger-with-empty-black-t-shirt-hanging-on-brick-wall-background-with-sunlight-shop-print-ad-concept.jpg?ver=6"
                          className="d-block w-100 img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="title mb-4">
                    <h3>{selectedItem.title}</h3>
                  </div>
                  <div className="category mb-4">
                    <span className="bg-light-gray p-2">
                      <a href="category.html">SHIRT</a>
                    </span>
                  </div>
                  <div className="rating d-flex text-danger mb-4">
                    {
                      <div>
                            <i className={selectedItem.stars[0]}></i>
                            <i className={selectedItem.stars[1]}></i>
                            <i className={selectedItem.stars[2]}></i>
                            <i className={selectedItem.stars[3]}></i>
                            <i className={selectedItem.stars[4]}></i>
                        </div>}
                  </div>
                  <div className="price mb-4">
                    <b>
                      <span className="mr-1"></span>₹
                      <span>{selectedItem.price}</span>
                    </b>
                  </div>
                  <div className="desc">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci dicta facere impedit illo non repellat saepe.
                      Voluptatem quasi dolor soluta nesciunt repellat eaque
                      molestiae cum, tempora ullam est iusto laboriosam quos
                      architecto dolorem adipisci voluptatum cumque sint, rem
                      minima modi quisquam itaque officia. Doloremque maiores
                      quam ipsam placeat veritatis, optio deleniti repellat quos
                      quidem vero nostrum aliquam odio. Magni, aut?
                    </p>
                  </div>
                  <div className="qty_section border-top pt-2 mb-4">
                    <label>Quantity</label>
                    <div>
                      <div className="mb-0 w-100">
                        <input
                          className="quantity text-center"
                          min="0"
                          max="10"
                          name="quantity"
                          onChange={() => {}}
                          value="1"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="buy">
                    <div className="btn btn-primary shadow" onClick={addToCart}>
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedItems />
    </div>
  );
};

export default ProductDetail;

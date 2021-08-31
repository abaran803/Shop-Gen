import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addNew } from "../ReduxComponents/CounterSlice";
import RelatedItems from "./RelatedItems";

const ProductDetail = (props) => {
  const items = [
    {
      id: "p1",
      image:
        "https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2020/11/T-Shirt-Mock-Up-Hanger-1.jpg",
      title: "Dress1 with details",
      price: 400,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p2",
      image:
        "https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg",
      title: "Dress2 with details",
      price: 300,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p3",
      image:
        "https://media.istockphoto.com/photos/black-tshirt-mockup-on-wooden-hanger-front-side-view-picture-id934210014?k=6&m=934210014&s=170667a&w=0&h=gbAhV_sd0yhkaE_cOGnmTlS_sj6d3iaBRt--c3CEWCA=",
      title: "Dress3 with details",
      price: 800,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCb9At9cE7v2qxeL4MpuCc9rStx7XKukxIQg&usqp=CAU",
      title: "Dress4 with details",
      price: 600,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p5",
      image:
        "https://image.shutterstock.com/image-illustration/tshirt-hanger-260nw-286589201.jpg",
      title: "Dress5 with details",
      price: 500,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p6",
      image:
        "https://us.123rf.com/450wm/peshkov/peshkov1904/peshkov190400211/120870898-hanger-with-empty-black-t-shirt-hanging-on-brick-wall-background-with-sunlight-shop-print-ad-concept.jpg?ver=6",
      title: "Dress6 with details",
      price: 900,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p7",
      image:
        "https://c8.alamy.com/comp/WTTP8C/t-shirt-on-hanger-at-home-WTTP8C.jpg",
      title: "Dress7 with details",
      price: 300,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p8",
      image:
        "https://c8.alamy.com/comp/2A9G6F7/hanger-with-blank-gray-t-shirt-on-yellow-background-space-for-text-2A9G6F7.jpg",
      title: "Dress8 with details",
      price: 400,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
    {
      id: "p9",
      image:
        "https://media.istockphoto.com/photos/shirt-on-a-hanger-picture-id111972698",
      title: "Dress9 with details",
      price: 600,
      stars: (
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ),
      type: "Shirt - Custom",
      color: "Custom",
      size: "M",
    },
  ];
  const dispatch = useDispatch();
  const pageId = useParams();
  const ind = items.findIndex((item) => item.id === pageId.id);
  if (ind === -1) {
    return <div>Item not found</div>;
  }
  const selectedItem = items[ind];
  const addToCart = () => {
    const item = selectedItem;
    const newItem = {
      id: item.id,
      name: item.title,
      image: item.image,
      totalPrice: 1 * item.price,
      quantity: 1,
      type: item.type,
      color: item.color,
      size: item.size,
    };
    dispatch(addNew(newItem));
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
                    {selectedItem.stars}
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

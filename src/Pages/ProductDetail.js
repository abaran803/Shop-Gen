import { useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addNew } from "../ReduxComponents/CounterSlice";

const ProductDetail = (props) => {
  const items = [
    {
      id: "p1",
      image:
        "https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2020/11/T-Shirt-Mock-Up-Hanger-1.jpg",
      title: "Dress1 with details",
      price: 400,
      stars: (
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
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
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
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
    console.log(selectedItem);
    dispatch(addNew(selectedItem));
  };
  return (
    <div>
      <div class="product_detail py-5 my-5" id="product_detail">
        <div class="container">
          <div class="section_title text-center mb-5">
            <h1 class="text-capitalize">product detail</h1>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12">
                  <div
                    id="carouselExampleIndicators"
                    class="carousel slide shadow rounded"
                    data-ride="carousel"
                  >
                    <ol class="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                      >
                        <img
                          src={selectedItem.image}
                          class="d-block w-100 img img-fluid rounded"
                          alt="image"
                          width="50px"
                        />
                      </li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      >
                        <img
                          src="https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg"
                          class="d-block w-100 img img-fluid rounded"
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
                          class="d-block w-100 img img-fluid rounded"
                          alt=""
                          width="15px"
                        />
                      </li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src={selectedItem.image}
                          class="d-block w-100 img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg"
                          class="d-block w-100 img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="https://us.123rf.com/450wm/peshkov/peshkov1904/peshkov190400211/120870898-hanger-with-empty-black-t-shirt-hanging-on-brick-wall-background-with-sunlight-shop-print-ad-concept.jpg?ver=6"
                          class="d-block w-100 img img-fluid rounded"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="title mb-4">
                    <h3>{selectedItem.title}</h3>
                  </div>
                  <div class="category mb-4">
                    <span class="bg-light-gray p-2">
                      <a href="category.html">SHIRT</a>
                    </span>
                  </div>
                  <div class="rating d-flex text-danger mb-4">
                    {selectedItem.stars}
                  </div>
                  <div class="price mb-4">
                    <b>
                      <span class="mr-1"></span>₹
                      <span>{selectedItem.price}</span>
                    </b>
                  </div>
                  <div class="desc">
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
                  <div class="qty_section border-top pt-2 mb-4">
                    <label>Quantity</label>
                    <div>
                      <div class="mb-0 w-100">
                        <input
                          class="quantity text-center"
                          min="0"
                          max="10"
                          name="quantity"
                          value="1"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="buy">
                    <Link
                      to="/cart"
                      class="btn btn-primary shadow"
                      onClick={addToCart}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="related-products py-5 my-5" id="related_products">
        <div class="title">
          <h3>Related Products</h3>
        </div>
        <div class="row mt-5">
          <div class="col-md-4 col-6">
            <div class="border border-dark rounded shadow text-center p-3">
              <div class="mb-4">
                <img
                  src="https://us.123rf.com/450wm/peshkov/peshkov1904/peshkov190400211/120870898-hanger-with-empty-black-t-shirt-hanging-on-brick-wall-background-with-sunlight-shop-print-ad-concept.jpg?ver=6"
                  alt=""
                  class="img img-fluid"
                />
              </div>
              <div>
                <a href="javascript:;">
                  <h5>Dress2 with details</h5>
                </a>
              </div>{" "}
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="border border-dark rounded shadow text-center p-3">
              <div class="mb-4">
                <img
                  src="https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg"
                  alt=""
                  class="img img-fluid"
                />
              </div>
              <div>
                <a href="javascript:;">
                  <h5>Dress3 with details</h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="border border-dark rounded shadow text-center p-3">
              <div class="mb-4">
                <img
                  src="https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2020/11/T-Shirt-Mock-Up-Hanger-1.jpg"
                  alt=""
                  class="img img-fluid"
                />
              </div>
              <div>
                <a href="javascript:;">
                  <h5>Dress4 with details</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

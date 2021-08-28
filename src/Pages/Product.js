import { useState } from "react";
import Items from "./Items";

const Product = () => {
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
      size: "M"
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
      size: "M"
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
      size: "M"
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
      size: "M"
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
      size: "M"
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
      size: "M"
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
      size: "M"
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
      size: "M"
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
      size: "M"
    },
  ];
  const [rangeValue, setRangeValue] = useState(500);
  const changeHandler = (e) => {
    setRangeValue(e.target.value);
  };
  const selectedItems = items.filter((item) => item.price <= rangeValue);
  return (
    <section class="products py-5 my 5" id="products">
      <div class="container">
        <div class="section_title text-center mb-5">
          <h1 class="text-capitalize">Products</h1>
        </div>
        <div class="row">
          <div class="col-md-3 border-right mb-small-5">
            <h4 class="mb-5 border-bottom">Filters</h4>
            <div class="mb-5">
              <label>
                <b>Category</b>
              </label>
              <ul class="list-group">
                <li class="list-group-item">Category 1</li>
                <li class="list-group-item">Category 2</li>
                <li class="list-group-item">Category 3</li>
                <li class="list-group-item">Category 4</li>
                <li class="list-group-item">Category 5</li>
              </ul>
            </div>
            <div>
              <form>
                <div class="form-group">
                  <label>
                    <b>Price</b>
                  </label>
                  <input
                    onChange={changeHandler}
                    type="range"
                    min="100"
                    max="1000"
                    step="100"
                    class="form-control-range"
                    value={rangeValue}
                  />
                </div>
              </form>
              <div class="d-flex justify-content-between">
                <label>₹{rangeValue}</label>
                <label>₹1000</label>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="row mb-5">
              {selectedItems.map((item) => (
                <Items
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  stars={item.stars}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

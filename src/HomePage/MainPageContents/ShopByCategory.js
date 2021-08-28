const ShopByCategory = (props) => {
  return (
    <div className="col-md-4 col-12">
      <div className="card bg-dark text-white">
        <a href="category.html">
          <img
            className="card-img img img-fluid"
            src={props.image}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default ShopByCategory;
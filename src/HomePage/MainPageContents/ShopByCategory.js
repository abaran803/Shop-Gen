import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopByCategory = (props) => {

  const storeId = useSelector(state => state.storeId.id);

  return (
    <div className="col-md-4 col-12">
      <div className="card text-white p-4">
        <Link to={`/${storeId}/product/category/${props.name}`}>
          <img
            className="card-img img img-fluid"
            src={props.image}
            style={{ width: "100%", height: "380px" }}
            alt=""
          />
        </Link>
        <h5 className="text text-center text-dark my-2">{props.name}</h5>
      </div>
    </div>
  );
};

export default ShopByCategory;
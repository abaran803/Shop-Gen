import { useSelector } from "react-redux";
import CustomCards from "../../Components/CustomCards";

const LatestProducts = (props) => {

    const storeId = useSelector(state => state.storeId.id);

    return (
        <div className="col-md-4 col-12 mb-3">
            <CustomCards
                cardImage={props.item.image}
                cardTitle={props.item.title}
                itemLink={`/${storeId}/product`}
                cardType={'Latest'}
                cardPrice={props.item.price}
                baseURL={`/${storeId}/product/${props.id}`}
            />
        </div>
    );
};

export default LatestProducts;

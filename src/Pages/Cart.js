import React, {Suspense, useEffect, useState} from "react";
import classes from "./Cart.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchFromBackend, fetchFromFirebase, getAllCartData, getSiteData} from "../ReduxComponents/CounterSlice";
import Loader from "../Components/Loader";
import { useHistory } from "react-router-dom";

const CartItems = React.lazy(() => import("./CartItems"));
const TotalCharge = React.lazy(() => import("./TotalCharge"));

const Cart = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const cartItems = useSelector((state) => state.counter.value);
    const count = cartItems.length;
    const userLoginStatus = JSON.parse(localStorage.getItem('userData'));
    const ownerId = JSON.parse(localStorage.getItem('ownerData'))["_id"];
    // const count = useSelector((state) => state.counter.length);
    const dispatch = useDispatch();
    useEffect(() => {
        const gettingData = async () => {
            if(!userLoginStatus) {
                return history.push(`/${ownerId}/loginUser`);
            }
            dispatch(getAllCartData(setIsLoading));
        }
        gettingData();
    }, [dispatch]);
    if(isLoading) {
        return <Loader />
    }
    return (
        <section className="cart py-5 my-2" id="cart">
            <div className="container">
                <div className="section_title text-center mb-3">
                    <h1 className="text-capitalize">Cart</h1>
                </div>
                <div className="row bg-cart_1 rounded">
                    <div className="col-md-8 border-right">
                        <div className="mb-3">
                            <div className="pt-4">
                                <Suspense fallback={<div className={classes.loading}></div>}>
                                    <h5 className="mb-4">
                                        Cart (<span>{count}</span> items)
                                    </h5>
                                    {(cartItems && cartItems.length) ? cartItems.map((item) => (
                                        <CartItems item={item} key={item.id}/>
                                    )) : <h1>No data found!!!</h1>}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 rounded">
                        <Suspense fallback={<div className={classes.loading}></div>}>
                            <TotalCharge cartItems={cartItems}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;

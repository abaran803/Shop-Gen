import React, { useEffect, useState } from "react";
import AllRoutes from "./AllContents/AllRoutes";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import { useDispatch } from "react-redux";
import { getSiteData, updateKey } from "./ReduxComponents/CounterSlice";
import { useLocation } from "react-router-dom";
import StoreNotFound from "./Pages/ErrorPages/StoreNotFound";
import Loader from "./Components/Loader";
import Home from "./Pages/Home/home";
import ShopGenerator from "./Components/ShopGenerator";
import GenerateSuccess from "./Components/GenerateSuccess";
import { Types } from "mongoose";

export default function App() {
    const dispatch = useDispatch();
    const [storeStatus, setStoreStatus] = useState('idle');
    const [userLoggedInData, setUserLoggedInData] = useState(false);

    // Getting key from URL
    const URL = useLocation();
    const storeId = URL.pathname.substring(1).split('/')[0];
    const isStore = Types.ObjectId.isValid(storeId);

    // Check if store exist
    useEffect(() => {
        if (isStore) {
            setStoreStatus('verifying');
            fetch(`${process.env.REACT_APP_BACKEND_URL}/storeCheck/${storeId}`)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Server responds with error!");
                    }
                    return res;
                })
                .then(() => {
                    dispatch(updateKey(storeId))
                    return setStoreStatus('verified')
                })
                .catch(err => setStoreStatus('not exist'));
        }
    }, [])

    // Getting site data if store exist
    useEffect(() => {
        if (isStore) {
            dispatch(getSiteData(storeId));
        }
    }, [storeStatus])

    // Function for user login
    const handleUserLoginStatus = (val) => {
        if (val) {
            setUserLoggedInData(true);
        } else {
            localStorage.setItem('userData', null);
            setUserLoggedInData(false);
        }
        window.location.reload(false);
    }

    if (URL.pathname === '/' || URL.pathname === '/home') {
        return <Home />
    }

    if (URL.pathname === '/generate') {
        return <ShopGenerator />
    }

    if (URL.pathname === '/generateSuccess') {
        return <GenerateSuccess />
    }

    if (storeStatus === "verifying") {
        return <div className="vh-100 d-flex align-items-center justify-content-center">
            <div>
                <Loader />
                <div>Loading Data</div>
            </div>
        </div>
    }

    return (storeStatus === 'verified' ? (
        <div>
            <Header setUserLoginStatus={handleUserLoginStatus} />
            <AllRoutes userLoginStatus={userLoggedInData} setUserLoginStatus={handleUserLoginStatus} />
            <Footer />
        </div>) : <StoreNotFound />);
}

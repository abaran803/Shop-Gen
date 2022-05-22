import React, {useEffect, useState} from "react";
import AllRoutes from "./AllContents/AllRoutes";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import {useDispatch} from "react-redux";
import {getSiteData, updateKey} from "./ReduxComponents/CounterSlice";
import {useLocation} from "react-router-dom";
import StoreNotFound from "./Pages/ErrorPages/StoreNotFound";

export default function App() {
    const dispatch = useDispatch();
    const [storeStatus, setStoreStatus] = useState('idle');
    const [userLoggedInData, setUserLoggedInData] = useState(false);

    // Getting key from URL
    const URL = useLocation();
    const storeId = URL.pathname.substring(1).split('/')[0];

    // Check if store exist
    useEffect(() => {
        setStoreStatus('verifying');
        fetch(`${process.env.REACT_APP_BACKEND_URL}/storeCheck/${storeId}`)
            .then(res => {
                console.log(res);
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
    }, [])

    // Getting site data if store exist
    useEffect(() => {
        dispatch(getSiteData());
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

    return (storeStatus === 'verified' ? (
        <div>
            <Header setUserLoginStatus={handleUserLoginStatus}/>
            <AllRoutes userLoginStatus={userLoggedInData} setUserLoginStatus={handleUserLoginStatus}/>
            <Footer/>
        </div>) : <StoreNotFound />);
}

import React, {useEffect, useState} from "react";
import AllRoutes from "./AllContents/AllRoutes";
import {fetchFromBackend} from "./API/api";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import {useDispatch} from "react-redux";
import {getAllCartData, getSiteData} from "./ReduxComponents/CounterSlice";
import LoginForm from "./Pages/LoginForm";
import { useHistory } from "react-router-dom";

export default function App() {
    const dispatch = useDispatch();
    const [loggedInData, setLoggedInData] = useState(false);
    const [userLoggedInData, setUserLoggedInData] = useState(false);
    useEffect(() => {
        setLoggedInData(JSON.parse(localStorage.getItem('ownerData')));
        setUserLoggedInData(JSON.parse(localStorage.getItem('userData')));
    }, [localStorage]);
    useEffect(() => {
        // dispatch(getAllCartData());
        dispatch(getSiteData());
    }, []);
    const handleLoginStatus = (val) => {
        if(val) {
            setLoggedInData(true);
        } else {
            localStorage.setItem('ownerData', null);
            setLoggedInData(false);
        }
        window.location.reload(false);
    }
    const handleUserLoginStatus = (val) => {
        if(val) {
            setUserLoggedInData(true);
        } else {
            localStorage.setItem('userData', null);
            setUserLoggedInData(false);
        }
        window.location.reload(false);
    }
    return (
        <div>
            {loggedInData && <Header setUserLoginStatus={handleUserLoginStatus} />}
            <AllRoutes loginStatus={loggedInData} userLoginStatus={userLoggedInData} setLoginStatus={handleLoginStatus} setUserLoginStatus={handleUserLoginStatus} />
            {loggedInData && <Footer/>}
        </div>
    );
}

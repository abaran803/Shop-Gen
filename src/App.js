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
    const history = useHistory();
    const dispatch = useDispatch();
    const [loggedInData, setLoggedInData] = useState();
    const [userLoggedInData, setUserLoggedInData] = useState();
    useEffect(() => {
        setLoggedInData(localStorage.getItem('ownerData'));
        setUserLoggedInData(localStorage.getItem('userData'));
    }, [localStorage]);
    useEffect(() => {
        // dispatch(getAllCartData());
        dispatch(getSiteData());
    }, []);
    const handleLoginStatus = (val) => {
        if(val) {
            setLoggedInData(true);
        } else {
            localStorage.clear('ownerData');
            setLoggedInData(false);
        }
    }
    const handleUserLoginStatus = (val) => {
        if(val) {
            setUserLoggedInData(true);
        } else {
            localStorage.clear('userData');
            setUserLoggedInData(false);
        }
    }
    return (
        <div>
            {loggedInData && <Header setUserLoginStatus={handleUserLoginStatus} />}
            <AllRoutes loginStatus={loggedInData} userLoginStatus={userLoggedInData} setLoginStatus={handleLoginStatus} setUserLoginStatus={handleUserLoginStatus} />
            {loggedInData && <Footer/>}
        </div>
    );
}

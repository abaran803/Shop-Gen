import React, {useEffect, useState} from "react";
import AllRoutes from "./AllContents/AllRoutes";
import {fetchFromBackend} from "./API/api";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import {useDispatch} from "react-redux";
import {getAllCartData, getSiteData} from "./ReduxComponents/CounterSlice";
import LoginForm from "./Pages/LoginForm";
import { useLocation } from "react-router-dom";

export default function App() {
    const dispatch = useDispatch();
    const [loggedInData, setLoggedInData] = useState(false);
    const [userLoggedInData, setUserLoggedInData] = useState(false);




    
  const URL = useLocation();
  const getString = (str) => {
    let i = 1;
    let id = '';
    while(i < str.length && str[i] != '/') id += (str[i++]);
    return id;
  }
  localStorage.setItem('ownerData', JSON.stringify({["_id"]: getString(URL.pathname)}));






    useEffect(() => {
        setLoggedInData(JSON.parse(localStorage.getItem('ownerData')));
        setUserLoggedInData(JSON.parse(localStorage.getItem('userData')));
        console.log(JSON.parse(localStorage.getItem('ownerData')));
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
            <AllRoutes loginStatus={loggedInData || getString(URL.pathname)} userLoginStatus={userLoggedInData} setLoginStatus={handleLoginStatus} setUserLoginStatus={handleUserLoginStatus} />
            {loggedInData && <Footer/>}
        </div>
    );
}

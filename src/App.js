import React, {useEffect} from "react";
import AllRoutes from "./AllContents/AllRoutes";
import {fetchFromBackend} from "./API/api";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import {useDispatch} from "react-redux";
import {getAllCartData, getSiteData} from "./ReduxComponents/CounterSlice";

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCartData());
        dispatch(getSiteData());
    }, []);
    return (
        <div>
            <Header/>
            <AllRoutes/>
            <Footer/>
        </div>
    );
}

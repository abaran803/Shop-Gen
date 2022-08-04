import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import classes from '../ErrorPages/StoreNotFound.module.css';
import logo from '../../assets/LottieFiles/shopIdError.gif';

const Home = () => {

    const history = useHistory();
    const [enteredId, setEnteredId] = useState();

    const storeIdHandler = (event) => {
        setEnteredId(event.target.value);
    }

    const gotoStore = (value) => {
        history.replace(`/${value}/home`);
        window.location.reload(false);
    }

    return (
        <div className='d-flex'>
            <div className={` ${classes.errorText} vh-100 d-flex justify-content-center`}>
                <div className='w-75 h-100 d-flex flex-column justify-content-center'>
                    <div className='font-weight-bold' style={{ fontSize: "2.5rem", lineHeight: "2.4rem", fontWeight: "800" }}>Hello, Welcome to Shop Generator</div>
                    <div className='my-3 text-secondary'>You can create your own online shop here. If you've already created, enter the shop ID below or create new one by clicking create store button below.</div>
                    <div className='my-2 d-flex'>
                        <input className={classes.inputField} type="text" placeholder='Enter Shop ID' onChange={storeIdHandler} />
                        <button className={`${classes.submitButton} h-100 bg bg-primary text-white rounded border-none`} onClick={() => gotoStore(enteredId)}>Go To Store</button>
                    </div>
                    <button className={`${classes.submitButton} mx-0 my-2 px-3 py-2 rounded text-white`} style={{ background: "rgba(80, 80, 80, 0.6)" }} disabled>Generate Your Store</button>
                    <button className={`${classes.submitButton} mx-0 my-1 px-3 py-2 bg bg-success rounded text-white`} onClick={() => gotoStore('62daadc9b528a5ec705e97c0')}>Demo Shop</button>
                </div>
            </div>
            <div className={`${classes.errorImage} w-50 vh-100 align-items-center justify-content-center`}>
                <lottie-player src={"https://assets8.lottiefiles.com/packages/lf20_ujzt2n1j.json"} background="transparent" speed="1" style={{width: "80%", height: "80%"}} loop autoplay></lottie-player>
            </div>
        </div>
    )
}

export default Home
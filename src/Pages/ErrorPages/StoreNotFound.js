import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import classes from './StoreNotFound.module.css';
import logo from '../../assets/LottieFiles/shopIdError.gif';

const StoreNotFound = () => {

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
          <div className='font-weight-lighter' style={{ fontSize: "2.2rem", lineHeight: "2.4rem" }}>May be, you have missed your shop id :(</div>
          <div className='my-3 text-secondary'>We are the platform to create the store for the businesses and provide unique store ID. If you are a customer of any store, please contact to the store owner for the correct ID</div>
          <div className='my-2 d-flex'>
            <input className={classes.inputField} type="text" placeholder='Enter Shop ID' onChange={storeIdHandler} />
            <button className={`${classes.submitButton} h-100 bg bg-primary text-white rounded border-none`} onClick={() => gotoStore(enteredId)}>Go To Store</button>
          </div>
          <button className={`${classes.submitButton} mx-0 my-2 px-3 py-2 rounded text-white`} style={{background: "rgba(80, 80, 80, 0.6)"}} disabled>Generate Your Store</button>
          <button className={`${classes.submitButton} mx-0 my-1 px-3 py-2 bg bg-success rounded text-white`} onClick={() => gotoStore('62daadc9b528a5ec705e97c0')}>Demo Shop</button>
        </div>
      </div>
      <div className={`${classes.errorImage} w-50 vh-100 align-items-center justify-content-center`}>
        <img className='w-100 h-100' src={logo} />
      </div>
    </div>
  )
}

export default StoreNotFound
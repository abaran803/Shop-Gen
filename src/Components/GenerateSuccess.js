import React from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const GenerateSuccess = () => {
    const location = useLocation();
    const history = useHistory();
    if (!(location.state)) {
        history.replace('/generate');
    }
    return (
        <div>{location.state && (
            <div className='d-flex align-items-center justify-content-center vh-100'>
                <div className='d-flex flex-column px-5 py-4 rounded bg bg-light border' style={{width: "500px", maxWidth: "90vw"}}>
                <div>Brand Name&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; {location.state.brandName}</div>
                <div>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; {location.state.email}</div>
                <div>Store ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; {location.state.storeId}</div>
                <div>URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; <a href={'https://abaran803.github.io/Shop-Gen/#/' + location.state.storeId + '/home'} target="_blank">Click Here</a></div>
                </div>
            </div>
        )}</div>
    )
}

export default GenerateSuccess
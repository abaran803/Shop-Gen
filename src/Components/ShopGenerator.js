import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ShopGenerator = () => {

    const history = useHistory();
    const [storeData, setStoreData] = useState();

    const handleChange = (e) => {
        setStoreData(e.target.value);
    }

    const handleSubmit = async (e) => {
        const URL = 'http://localhost:8080/generateStore';
        const data = JSON.parse(storeData);
        e.preventDefault();
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        history.replace({
            pathname: '/generateSuccess',
            state: {
                storeAdded: true
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea cols="30" rows="10" onChange={handleChange} value={storeData}></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ShopGenerator
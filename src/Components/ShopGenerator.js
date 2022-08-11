import React, { useEffect } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';

const ShopGenerator = () => {

  const history = useHistory();
  const [storeData, setStoreData] = useState();
  const [loading, setLoading] = useState();
  const [selectedMethod, setSelectedMethod] = useState(0);

  const handleChange = (e) => {
    setStoreData(e.target.value);
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    const URL = `${process.env.REACT_APP_BACKEND_URL}/generateStore`;
    const data = JSON.parse(storeData);
    const { brandName, email } = data;
    e.preventDefault();
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const jsonResponse = await response.json();
    history.replace({
      pathname: '/generateSuccess',
      state: {
        storeAdded: true,
        brandName,
        email,
        storeId: jsonResponse.storeId
      }
    });
  }

  const inputDataMethods = [
    'JSON Data',
    'JSON File',
    'Fill Form'
  ]

  const methodMapping = [
    jsonData(handleSubmit, handleChange, storeData),
    jsonFile(handleSubmit, handleChange, storeData),
    fillForm(handleSubmit, handleChange, storeData)
  ]

  if (loading) {
    return <Loader />
  }

  return (
    <div className='container'>
      <ul className='d-flex w-100 justify-content-between mt-3' style={{ listStyleType: "none" }}>
        {inputDataMethods.map((item, id) => (
          <li key={id}>
            <button type="button" className={`btn btn${!(selectedMethod === id) ? '-outline' : ''}-primary shadow-none`} onClick={() => setSelectedMethod(id)} key={id}>{item}</button>
          </li>
        ))}
      </ul>
      {methodMapping[selectedMethod === undefined ? 0 : selectedMethod]}
    </div>
  )
}

const jsonData = (handleSubmit, handleChange, storeData) => (
  <form onSubmit={handleSubmit}>
    <textarea cols="30" rows="10" onChange={handleChange} value={storeData}></textarea>
    <button type="submit">Submit</button>
  </form>
)

const jsonFile = (handleSubmit, handleChange, storeData) => (
  <div>Hello</div>
)

const fillForm = (handleSubmit, handleChange, storeData) => (
  <div>World</div>
)

export default ShopGenerator
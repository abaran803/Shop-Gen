import {fetchData} from "../ReduxComponents/CounterSlice";

const URL = "https://ancient-plateau-36518.herokuapp.com";
const URL2 = "http://localhost:8080";

export const fetchFromBackend = () => async dispatch => {
    try {
        const res = await fetch(URL+"/gets-items");
        if (!res.OK) {
            throw new Error("Error Occured");
        }
        const data = await res.json();
        console.log(data)
        dispatch(fetchData({value: data, length: data.length}));
    } catch (err) {
        dispatch(fetchData({value: [], length: 0}));
        console.log("sdfc")
    }
}

const getSiteDataFromBackend = async () => {
    try {
        const response = await fetch(URL+"/site-data/");
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return await response.json();
    } catch (err) {
        return false;
    }
}

const fetchCartFromBackend = async () => {
    try {
        const response = await fetch(URL+"/get-items/");
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return await response.json();
    } catch (err) {
        return false;
    }
}

const addNewItemToBackend = async item => {
    try {
        const response = await fetch(URL+"/add-new/" + item.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return true;
    } catch (err) {
        return false;
    }
}

const removeAllFromBackend = async item => {
    try {
        const response = await fetch(URL+"/remove-all/" + item.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return await response.json();
    } catch
        (err) {
        return false;
    }
}

const getCategories = async (count) => {
    const categories = await fetch(`${URL2}/${count}`);
    return categories;
}

const getProducts = async (count) => {
    const products = await fetch(`${URL2}/someProducts/${count}`);
    return products;
}

const getProductDetails = async (id) => {
    const product = await fetch(`${URL2}/getSpecificProduct/${id}`)
    return product;
}

export {
    getSiteDataFromBackend, 
    fetchCartFromBackend, 
    addNewItemToBackend, 
    removeAllFromBackend,
    getCategories,
    getProducts,
    getProductDetails
}
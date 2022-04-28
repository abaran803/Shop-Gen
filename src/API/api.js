import {fetchData} from "../ReduxComponents/CounterSlice";

const URL = process.env.REACT_APP_BACKEND_URL

export const fetchFromBackend = () => async dispatch => {
    try {
        const res = await fetch(URL+"/gets-items/O1/U1");
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
        const response = await fetch(URL+"/site-data/O1");
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
        const response = await fetch(URL+"/get-items/O1/U1");
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
        const selectedItem = {...item, ownerId: 'O1', userId: "U1"};
        const response = await fetch(URL+"/add-new", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedItem)
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
        const selectedItem = {...item, ownerId: 'O1', userId: "U1"};
        const response = await fetch(URL+"/remove-all", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedItem)
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
    const categories = await fetch(`${URL}/getCategories/O1/${count}`);
    return categories;
}

const getProducts = async (count) => {
    const products = await fetch(`${URL}/getProducts/O1/${count}`);
    return products;
}

const getProductDetails = async (id) => {
    const product = await fetch(`${URL}/getProductDetails/O1/${id}`)
    return product;
}

const getItemsByCategory = async (category) => {
    const products = await fetch(`${URL}/getProductsByCategory/O1/${category}`);
    return products;
}

export {
    getSiteDataFromBackend, 
    fetchCartFromBackend, 
    addNewItemToBackend, 
    removeAllFromBackend,
    getCategories,
    getProducts,
    getProductDetails,
    getItemsByCategory
}
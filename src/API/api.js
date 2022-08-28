import { store } from "../ReduxComponents/store";
import { fetchData } from "../ReduxComponents/CounterSlice";

// const URL = 'http://localhost:8080'
const URL = process.env.REACT_APP_BACKEND_URL

const storeId = window.location.hash.substring(2).split('/')[0];
const userData = JSON.parse(localStorage.getItem('userData'));

export const fetchFromBackend = () => async dispatch => {
    const { storeId } = store.getState();
    console.log(storeId);
    try {
        const res = await fetch(URL + `/gets-items/${storeId}/${'userId'}`);
        if (!res.OK) {
            throw new Error("Error Occured");
        }
        const data = await res.json();
        dispatch(fetchData({ value: data, length: data.length }));
    } catch (err) {
        dispatch(fetchData({ value: [], length: 0 }));
    }
}

const storeCheck = async (storeId) => {
    // try {
    //     const response = await fetch(`${URL}/storeCheck/${storeId}`);
    //     if(!response.ok) {
    //         throw new Error("Store not Exist");
    //     }
    //     return response;
    // } catch(e) {
    //     return e;
    // }
    fetch(`${URL}/storeCheck/${storeId}`)
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Server responds with error!");
            }
        })
        .then(data => console.log(data))
        .catch(err => err.message);
}

const getSiteDataFromBackend = async (storeId) => {
    try {
        const response = await fetch(`${URL}/site-data/${storeId}`);
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
        console.log(`${URL}/get-items/${storeId}/${userData["_id"]}`);
        const response = await fetch(`${URL}/get-items/${storeId}/${userData["_id"]}`);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        console.log(storeId);
        return await response.json();
    } catch (err) {
        console.log(storeId);
        return false;
    }
}

const addNewItemToBackend = async item => {
    try {
        const selectedItem = { ...item, storeId, userId: userData["_id"] };
        const response = await fetch(URL + "/add-new", {
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

const removeOneFromBackend = async item => {
    try {
        const selectedItem = { ...item, storeId, userId: userData["_id"] };
        const response = await fetch(URL + "/remove-one", {
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

const removeAllFromBackend = async item => {
    try {
        const selectedItem = { ...item, storeId, userId: userData["_id"] };
        const response = await fetch(URL + "/remove-all", {
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

const getCategories = async (count, storeId) => {
    const categories = await fetch(`${URL}/getCategories/${storeId}/${count}`);
    if (!categories.ok) {
        throw new Error('Categories not Found');
    }
    const { data } = await categories.json();
    return data;
}

const getProducts = async (count, storeId) => {
    const products = await fetch(`${URL}/getProducts/${storeId}/${count}`);
    if (!products.ok) {
        throw new Error("Products not found");
    }
    const { data } = await products.json();
    return data;
}

const getProductDetails = async (storeId, id) => {
    const product = await fetch(`${URL}/getProductDetails/${storeId}/${id}`)
    if (!product.ok) {
        throw new Error('Product not Found');
    }
    const { data } = await product.json();
    return data;
}

const getItemsByCategory = async (category) => {
    const products = await fetch(`${URL}/getProductsByCategory/${storeId}/${category}`);
    return products;
}

const registerOwner = async (ownerData) => {
    try {
        const response = await fetch(URL + "/registerOwner", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ownerData)
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return true;
    } catch (err) {
        return false;
    }
}

const loginOwner = async (ownerData) => {
    try {
        const response = await fetch(URL + "/loginOwner", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ownerData)
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
}

const registerUser = async (userData) => {
    const response = await fetch(URL + "/registerUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...userData, storeId })
    });
    return response;
}

const loginUser = async (userData) => {
    try {
        const response = await fetch(URL + "/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
}

const shopGenerator = async (data) => {
    const response = await fetch(URL + '/generateStore', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error('Unable to create Shop!!!');
    }
    const res = await response.json();
    return res;
}

export {
    storeCheck,
    getSiteDataFromBackend,
    fetchCartFromBackend,
    addNewItemToBackend,
    removeOneFromBackend,
    removeAllFromBackend,
    getCategories,
    getProducts,
    getProductDetails,
    getItemsByCategory,
    registerOwner,
    loginOwner,
    registerUser,
    loginUser,
    shopGenerator
}
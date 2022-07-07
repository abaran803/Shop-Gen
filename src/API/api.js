import {store} from "../ReduxComponents/store";
import {fetchData} from "../ReduxComponents/CounterSlice";

// const URL = process.env.REACT_APP_BACKEND_URL
const URL = process.env.REACT_APP_BACKEND_URL

const storeId = window.location.hash.substring(2).split('/')[0];
const userData = JSON.parse(localStorage.getItem('userData'));

export const fetchFromBackend = () => async dispatch => {
    try {
        const res = await fetch(URL + "/gets-items/O1/U2");
        if (!res.OK) {
            throw new Error("Error Occured");
        }
        const data = await res.json();
        dispatch(fetchData({value: data, length: data.length}));
    } catch (err) {
        dispatch(fetchData({value: [], length: 0}));
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

const getSiteDataFromBackend = async () => {
    const {storeId} = store.getState();
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
        const selectedItem = {...item, storeId, userId: userData["_id"]};
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
        const selectedItem = {...item, storeId, userId: userData["_id"]};
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
        const selectedItem = {...item, storeId, userId: userData["_id"]};
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

const getCategories = async (count) => {
    const categories = await fetch(`${URL}/getCategories/${storeId}/${count}`);
    return categories;
}

const getProducts = async (count) => {
    const products = await fetch(`${URL}/getProducts/${storeId}/${count}`);
    return products;
}

const getProductDetails = async (id) => {
    const product = await fetch(`${URL}/getProductDetails/${storeId}/${id}`)
    return product;
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
    try {
        const response = await fetch(URL + "/registerUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...userData, storeId})
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return true;
    } catch (err) {
        return false;
    }
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
    loginUser
}
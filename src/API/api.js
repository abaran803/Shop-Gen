import {fetchData} from "../ReduxComponents/CounterSlice";

const URL = "http://localhost:3001";

export const fetchFromBackend = () => async dispatch => {
    try {
        const res = await fetch("http://localhost:3001/gets-items");
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
        const response = await fetch("http://localhost:8080/site-data/");
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
        const response = await fetch("http://localhost:8080/get-items/");
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
        const response = await fetch("http://localhost:8080/add-new/" + item.id, {
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
        const response = await fetch("http://localhost:8080/remove-all/" + item.id, {
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

export {getSiteDataFromBackend, fetchCartFromBackend, addNewItemToBackend, removeAllFromBackend}
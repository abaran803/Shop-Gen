import React, {Fragment} from "react";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addNewItemToBackend, fetchCartFromBackend, getSiteDataFromBackend, removeAllFromBackend} from "../API/api";

const getAllCartData = createAsyncThunk(
    'item/getData',
    async (callbackFunction) => {
        callbackFunction(true);
        const data = await fetchCartFromBackend();
        callbackFunction(false);
        return data;
    }
)

const addNewCartItem = createAsyncThunk(
    'item/add',
    async (item) => {
        return await addNewItemToBackend(item)
    }
)

const removeAllCartItem = createAsyncThunk(
    'items/removeAll',
    async (item) => {
        return await removeAllFromBackend(item)
    }
)

const getSiteData = createAsyncThunk(
    'items/getSiteData',
    async (item) => {
        return await getSiteDataFromBackend();
    }
)

const initialState = {
    value: []
};

const siteDataState = {
    data: {}
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        removeOneItem: (state, action) => {
            const ind = state.value.findIndex(
                (item) => item.id === action.payload.id
            );
            if (ind === -1) {
                return;
            }
            if (state.value[ind].quantity === 1) {
                state.value = state.value.filter(
                    (item) => item.id !== action.payload.id
                );
                return;
            }
            const selectedItem = state.value[ind];
            selectedItem.quantity--;
        },
        addOneItem: (state, action) => {
            const ind = state.value.findIndex(
                (item) => item.id === action.payload.id
            );
            if (ind === -1) {
                return;
            }
            const selectedItem = state.value[ind];
            selectedItem.quantity++;
        },
        addNewToBackend: (state, action) => {
            const ind = state.value.findIndex(
                (item) => item.id === action.payload.id
            );
            if (ind !== -1) {
                const selectedItem = state.value[ind];
                selectedItem.quantity++;
                console.log("dddd")
                return;
            }
            const item = action.payload;
            state.value.push(item);
            console.log("dcv")
            // const sendingData = async () => {
            //     await fetch(
            //         "http://localhost:3001/add-item",
            //         {
            //             method: "POST",
            //             body: JSON.stringify(newItem),
            //             headers: {
            //                 "Content-type": "application/json; charset=UTF-8",
            //             },
            //         }
            //     );
            // };
            // sendingData();
            alert("Item added to cart");
        },
        fetchData: (state, action) => {
            const data = action.payload;
            state.value = data.value;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(removeAllCartItem.fulfilled, (state, action) => {
            console.log(action.payload)
            if (action.payload) {
                const id = action.meta.arg.id;
                const ind = state.value.findIndex(
                    (item) => item.id === id
                );
                if (ind === -1) {
                    return;
                }
                state.value = state.value.filter(item => item.id !== id);
            }
        })

        builder.addCase(addNewCartItem.fulfilled, (state, action) => {
            const id = action.meta.arg.id;
            console.log(action.meta.arg);
            if (action.payload) {
                const ind = state.value.findIndex(
                    (item) => item.id === id
                );
                if (ind !== -1) {
                    const selectedItem = state.value[ind];
                    selectedItem.quantity++;
                    return;
                }
                const item = action.meta.arg;
                state.value.push(item);
            }
        })

        builder.addCase(getAllCartData.fulfilled, (state, action) => {
            if (action.payload) {
                state.value = action.payload;
            }
        })
    }
});

const siteData = createSlice({
    name: "siteData",
    initialState: siteDataState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getSiteData.fulfilled, (state, action) => {
            console.log(action.payload.data)
            if (action.payload) {
                state.data = action.payload.data;
            }
        })
    }
});

export const {removeOneItem, addOneItem, fetchData} =
    counterSlice.actions;

export default counterSlice.reducer;
export {siteData, getSiteData, getAllCartData, addNewCartItem, removeAllCartItem};
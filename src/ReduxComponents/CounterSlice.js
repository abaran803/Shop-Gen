import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  length: 2,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNew: (state, action) => {
      const ind = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ind !== -1) {
        const selectedItem = state.value[ind];
        selectedItem.totalPrice += action.payload.price;
        selectedItem.quantity++;
        return;
      }
      const item = action.payload;
      const newItem = {
        id: item.id,
        name: item.title,
        image: item.image,
        totalPrice: 1 * item.price,
        quantity: 1,
        type: item.type,
        color: item.color,
        size: item.size,
      };
      state.value.push(newItem);
      state.length++;
      const sendingData = async () => {
        await fetch(
          "https://e-commerce-cb57e-default-rtdb.firebaseio.com/cart.json",
          {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
      };
      sendingData();
      alert("Item added to cart");
    },
    fetchFromFirebase: (state, action) => {
      const data = action.payload;
      state.value = data.value;
      state.length = data.length;
    },
    removeAllItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      state.length--;
    },
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
        state.length--;
        return;
      }
      const selectedItem = state.value[ind];
      selectedItem.totalPrice -=
        selectedItem.totalPrice / selectedItem.quantity;
      selectedItem.quantity--;
    },
  },
});

export const { addNew, removeOneItem, removeAllItem, fetchFromFirebase } =
  counterSlice.actions;

export default counterSlice.reducer;

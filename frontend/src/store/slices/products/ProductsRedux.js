import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    setProductList: (state, action) => {
      state.list = action.payload;//action.payload es la accion de getProduct
    }
  },
});

export const { setProductList } = productSlice.actions; // userSlice.actions esta predeterminado

export default productSlice.reducer;

export const getProduct = () => (dispatch) => {
    axios.get("http://localhost:4000")
    .then(response => {
        const { data } = response
      dispatch(setProductList(data));
    })
    .catch((error) => console.log(error));
};

//DISPATCH SE ENCARGA DE EJECUTAR LAS ACTIONS 



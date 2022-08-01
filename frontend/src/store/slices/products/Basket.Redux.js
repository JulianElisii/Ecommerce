import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  basketList: [],
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketList(state, action) {
      state.basketList.push(action.payload)
      toast.success(`${action.payload.name} save in cart`, {
        position:"bottom-left"
      })// retorna lo que haya en el array y lo que le mandamos de la accion
    },
    removeItem(state, action) {
      const index = state.basketList.findIndex((basketItem => basketItem.id === action.payload.productB))
      let newbasket = state.basketList
      if(index>=0){
          newbasket.splice(index, 1)
      } else{console.log("No se pudo borrar")}
     
      state.basketList = newbasket
      toast.success(`${action.payload.name} delete on cart`, {
        position:"bottom-left"
      })
    },
    getBasketTotal(basketList){
      basketList?.reduce((amount, item) => parseInt(item) + parseInt(amount), 0)
  }
  }
});

export const { setBasketList, removeItem,getBasketTotal } = basketSlice.actions; // userSlice.actions esta predeterminado

export default basketSlice.reducer;

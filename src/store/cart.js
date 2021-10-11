import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itens: [],
    itensPagos: []
  },
  reducers: {
    add(state, action){
      state.itens.push(action.payload)
    },
    remove(state, action){
      state.itens.splice(action.payload, 1)
    },
    reset(state, action){
      state.itensPagos = []
    },
    finish(state, action){
      state.itensPagos = state.itens
      state.itens = [];
    },

  }
});

export const actions = cartSlice.actions;
export default cartSlice.reducer
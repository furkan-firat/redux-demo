import { createSlice } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice.js';

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams -= 1;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export const iceCreamActions = iceCreamSlice.actions;
export const iceCreamReducer = iceCreamSlice.reducer;

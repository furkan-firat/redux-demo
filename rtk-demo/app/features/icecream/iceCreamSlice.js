import { createSlice } from '@reduxjs/toolkit';

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
});

export const iceCreamActions = iceCreamSlice.actions;
export const iceCreamReducer = iceCreamSlice.reducer;

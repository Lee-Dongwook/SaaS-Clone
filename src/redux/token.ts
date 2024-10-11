import { createSlice } from "@reduxjs/toolkit";

const tokenSlices = createSlice({
  name: "token",
  initialState: { tokenList: {}, tokenSet: {} },
  reducers: {
    setTokenList: (state, action) => {
      state.tokenList = action.payload;
    },
    setTokenSet: (state, action) => {
      state.tokenSet = action.payload;
    },
  },
});

export const { setTokenList, setTokenSet } = tokenSlices.actions;
export default tokenSlices.reducer;

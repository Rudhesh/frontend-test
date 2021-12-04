import { createSlice } from '@reduxjs/toolkit';

// export const initialState = {};

const slice = createSlice({
  name: 'auth',
  initialState: {
    openBox: [],
  },
  reducers: {
    setOpenBox: (state, action) => {
      state.openBox = action.payload;
    },
    // reset: () => initialState,
  },
});

// const selectors = {};
// const actions = { ...slice.actions };

// export { actions, selectors };
export const { setOpenBox } = slice.actions;

export default slice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// export const initialState = {};

const slice = createSlice({
  name: 'auth',
  initialState: {
    openBox: [],
    login: true,
  },
  reducers: {
    setOpenBox: (state, action) => {
      state.openBox = action.payload;
    },
    setLogin: (state, action) => {
      state.openBox = action.payload;
    },
  },
});

export const { setOpenBox, setLogin } = slice.actions;

export default slice.reducer;

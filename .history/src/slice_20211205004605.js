import { createSlice } from '@reduxjs/toolkit';

// export const initialState = {};

const slice = createSlice({
  name: 'auth',
  initialState: {
    openBox: [],
    login: false,
  },
  reducers: {
    setOpenBox: (state, action) => {
      state.openBox = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { setOpenBox, setLogin } = slice.actions;

export default slice.reducer;

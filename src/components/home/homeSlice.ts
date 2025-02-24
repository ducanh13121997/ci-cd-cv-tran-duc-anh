import { createSlice } from "@reduxjs/toolkit";

interface HomeState {
  value: number;
}

const initialState: HomeState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions để dùng trong component
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

// Export reducer để thêm vào store
export default homeSlice.reducer;

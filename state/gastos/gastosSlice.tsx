import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface GastosState {
  value: number;
}

const initialState: GastosState = {
  value: 0,
};

const GastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    addGastos: (state, action: PayloadAction<{ value: number }>) => {
      state.value -= action.payload.value;
    },
    minusGastos: (state, action: PayloadAction<{ value: number }>) => {
      state.value += action.payload.value;
    },
  },
});

export const { addGastos, minusGastos } = GastosSlice.actions;
export default GastosSlice.reducer;

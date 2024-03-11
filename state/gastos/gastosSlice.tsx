import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface GastosState {
  totalGastos: number;
  data: dataState[];
}

interface dataState {
  value: number;
  icon: any;
  name: string;
}

const initialState: GastosState = {
  totalGastos: 0,
  data: [],
};

const GastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    addGastos: (state, action: PayloadAction<dataState>) => {
      state.data.push(action.payload);
      state.totalGastos += action.payload.value;
    },
  },
});

export const { addGastos } = GastosSlice.actions;
export default GastosSlice.reducer;

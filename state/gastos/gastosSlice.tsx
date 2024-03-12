import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface GastosState {
  totalGastos: number;
  data: dataState[];
}

interface dataState {
  id: number;
  value: number;
  icon: any;
  name: string;
  time: string;
}

const initialState: GastosState = {
  totalGastos: 0,
  data: [],
};

const sortData = (item: dataState[]) => {
  return item.sort((a, b) => b.id - a.id);
};

const GastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    addGastos: (state, action: PayloadAction<dataState>) => {
      state.data.push(action.payload);
      state.data = sortData(state.data);
      state.totalGastos += action.payload.value;
    },
    deleteGastos: (state, action: PayloadAction<dataState>) => {
      const newState = state.data.filter(
        (item) => JSON.stringify(item) != JSON.stringify(action.payload)
      );
      state.data = sortData(newState);
      state.totalGastos -= action.payload.value;
    },
  },
});

export const { addGastos, deleteGastos } = GastosSlice.actions;
export default GastosSlice.reducer;

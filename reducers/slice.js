import { createSlice } from "@reduxjs/toolkit";

export const opcionesSlice = createSlice({
    name: 'opciones',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});
export const { increment, decrement } = opcionesSlice.actions;
export const selectCount = (state) => state.opciones.value;
export default opcionesSlice.reducer;
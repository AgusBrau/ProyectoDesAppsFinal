import { configureStore } from "@reduxjs/toolkit";
import opcionesReducer from './slice'
export const store = configureStore({
    reducer: {
      opciones: opcionesReducer,  
    },
})
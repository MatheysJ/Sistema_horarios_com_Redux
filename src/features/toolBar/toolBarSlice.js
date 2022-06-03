import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    estado: 'idle', // idle || delete ||  edit  || forward || back
    color: 'gray',  // gray ||   red  || yellow ||   gray  || gray
}

export const toolBarSlice = createSlice({
    name: 'toolbar', //NÃO PODE TER LETRA MAIÚSCULA
    initialState,
    reducers: {
        mudarEstado: {
            reducer(state, action) {
                return {...state, estado: action.payload.estado, color: estadoColor(action.payload.estado)}
            }
        }
    }
})

export const estadoColor = (estado) => {
    if (estado === 'idle'){
        return 'rgb(110, 110, 110)'
    } else if (estado === 'delete') {
        return 'rgb(177, 57, 57)'
    } else if (estado === 'edit') {
        return 'rgb(230, 200, 32)'
    }
    return 'rgb(110, 110, 110)'
}

export const selectToolBar = (state) => state.toolbar.estado
export const selectToolBarColor = (state) => state.toolbar.color

export const { mudarEstado } = toolBarSlice.actions

export default toolBarSlice.reducer
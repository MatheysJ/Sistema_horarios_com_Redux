import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    estado: 'idle' // idle || delete || edit || forward || back
}

export const toolBarSlice = createSlice({
    name: 'toolbar', //NÃO PODE TER LETRA MAIÚSCULA
    initialState,
    reducers: {
        mudarEstado: {
            reducer(state, action) {
                console.log(action.payload)
                return {...state, estado: action.payload}
            }
        }
    }
})

export const selectToolBar = (state) => state.toolbar.estado

export const { mudarEstado } = toolBarSlice.actions

export default toolBarSlice.reducer
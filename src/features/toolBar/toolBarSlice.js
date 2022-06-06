import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ferramenta: 'idle', // idle || delete ||  edit  || forward || back
    color: 'gray',  // gray ||   red  || yellow ||   gray  || gray
    estado: 'idle'
}

export const toolBarSlice = createSlice({
    name: 'toolbar', //NÃO PODE TER LETRA MAIÚSCULA
    initialState,
    reducers: {
        mudarFerramenta: {
            reducer(state, action) {
                return {...state, ferramenta: action.payload.ferramenta, color: ferramentaColor(action.payload.ferramenta)}
            }
        }
    }
})

export const ferramentaColor = (ferramenta) => {
    if (ferramenta === 'idle'){
        return 'rgb(110, 110, 110)'
    } else if (ferramenta === 'delete') {
        return 'rgb(177, 57, 57)'
    } else if (ferramenta === 'edit') {
        return 'rgb(230, 200, 32)'
    }
    return 'rgb(110, 110, 110)'
}

export const selectToolBar = (state) => state.toolbar.ferramenta
export const selectToolBarColor = (state) => state.toolbar.color
export const selectToolBarEstado = (state) => state.toolbar.estado

export const { mudarFerramenta } = toolBarSlice.actions

export default toolBarSlice.reducer
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    horarios: [],
}

export const horasSlice = createSlice({
    name: 'horas',
    initialState,
    reducers: {
        addHorario: {
            reducer(state, action) {
                state.horarios.push(action.payload)
            },
            prepare({inicio, fim, desc, total, totalMins}){
                return{
                    payload: {
                        inicio,
                        fim,
                        desc,
                        total,
                        id: nanoid(),
                        totalMins,
                    }
                }
            }
        },
        delHorario: {
            reducer(state, action){
                return {
                    horarios: state.horarios.filter(item => item.id !== action.payload.id)
                }
            }
        },
        editHorario: {
            reducer(state, action){                
            }
        },
        forwardDia: {
            reducer(state, action){                
            }
        },
        backDia: {
            reducer(state, action) {                
            }
        }
    }
})

export const clickedWithTool = (estado, id) => (dispatch) => {    
    if (estado == 'idle') {        
    } else if (estado == 'delete') {        
        dispatch(delHorario(id))
    } else if (estado == 'edit') {        
        dispatch(editHorario(id))
    } else if (estado == 'forward') {        
        dispatch(forwardDia())
    } else if (estado == 'back') {        
        dispatch(backDia())
    }
}

export const selectHoras = (state) => state.horas.horarios

export const { addHorario, delHorario, editHorario, forwardDia, backDia } = horasSlice.actions

export default horasSlice.reducer
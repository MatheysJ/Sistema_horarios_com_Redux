import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    horarios: [],
    horasDia: '04:00'
}

export const horasSlice = createSlice({
    name: 'horas',
    initialState,
    reducers: {
        addHorario: {
            reducer(state, action) {
                if (state.horarios){
                    state.horarios.push(action.payload)
                }
                else {
                    state.horarios[0] = action.payload
                }
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
                    ...state,
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
        },
        changeMaxHoras: {
            reducer(state, action) {
                return {
                    ...state,
                    horasDia: action.payload,
                    minsDia: minsDia(action.payload)
                }
            }
        }
    }
})

export function minsDia(tempo) {
    let tempoArray = tempo.split(':')
    return Number(tempoArray[0]) * 60 + Number(tempoArray[1])
}

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
export const selectMaxHoras = (state) => state.horas.horasDia
export const selectMaxMins = (state) => state.horas.minsDia

export const { addHorario, delHorario, editHorario, forwardDia, backDia, changeMaxHoras } = horasSlice.actions

export default horasSlice.reducer
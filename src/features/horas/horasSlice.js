import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    horarios: [],
    horasDia: '04:00',
    editando: {}
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
        getEditItem: {
            reducer(state, action){                         
                return {
                    ...state,
                    editando: action.payload,
                }
            }
        },
        editHorario: {
            reducer(state, action) {
                state.horarios[action.payload.index] = action.payload
            },
            prepare({inicio, fim, desc, total, totalMins}, index){
                return{
                    payload: {
                        inicio,
                        fim,
                        desc,
                        total,
                        id: nanoid(),
                        totalMins,
                        index
                    }
                }
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
        },
        mudarEstado: {
            reducer(state, action){
                return {...state, estado: action.payload}
            }
        }
    }
})

export function minsDia(tempo) {
    let tempoArray = tempo.split(':')
    return Number(tempoArray[0]) * 60 + Number(tempoArray[1])
}

export const clickedWithTool = (ferramenta, id) => (dispatch) => {    
    if (ferramenta === 'idle') {        
    } else if (ferramenta === 'delete') {        
        dispatch(delHorario(id))
    } else if (ferramenta === 'edit') {        
        dispatch(getEditItem(id))
        dispatch(mudarEstado('editando'))
    } else if (ferramenta === 'forward') {        
        dispatch(forwardDia())
    } else if (ferramenta === 'back') {        
        dispatch(backDia())
    }
}

export const selectHoras = (state) => state.horas.horarios
export const selectMaxHoras = (state) => state.horas.horasDia
export const selectMaxMins = (state) => state.horas.minsDia
export const selectEditandoItem = (state) => state.horas.editando
export const selectEstado = (state) => state.horas.estado

export const { addHorario, delHorario, getEditItem, forwardDia, backDia, changeMaxHoras, editHorario, mudarEstado } = horasSlice.actions

export default horasSlice.reducer
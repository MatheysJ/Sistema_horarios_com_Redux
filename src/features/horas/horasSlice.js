import { createSlice, nanoid } from "@reduxjs/toolkit";
import moment from 'moment'

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
                console.log(state.horarios.filter(item => item.id !== action.payload.id))
                return {
                    horarios: state.horarios.filter(item => item.id !== action.payload.id)
                }
            }
        }
    }
})

export const selectHoras = (state) => state.horas.horarios

export const { addHorario, delHorario } = horasSlice.actions

export default horasSlice.reducer
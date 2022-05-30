import { createSlice, nanoid } from "@reduxjs/toolkit";
import moment from 'moment'

const initialState = []

export const horasSlice = createSlice({
    name: 'horas',
    initialState,
    reducers: {
        addHorario: {
            reducer(state, action) {
                state.push(action.payload)
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
        }
    }
})

export const selectHoras = (state) => state.horas

export const { addHorario } = horasSlice.actions

export default horasSlice.reducer
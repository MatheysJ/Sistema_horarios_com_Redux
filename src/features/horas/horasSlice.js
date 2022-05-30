import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

export const horasSlice = createSlice({
    name: 'horas',
    initialState,
    reducers: {
        addHorario: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({inicio, fim, desc, total}){
                return{
                    payload: {
                        inicio,
                        fim,
                        desc,
                        total,
                        id: nanoid()
                    }
                }
            }
        }
    }
})

export const selectHoras = (state) => state.horas

export const { addHorario } = horasSlice.actions

export default horasSlice.reducer
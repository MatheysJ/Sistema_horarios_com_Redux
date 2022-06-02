import { createSlice, nanoid } from "@reduxjs/toolkit";
import moment from 'moment'
import { useSelector } from "react-redux";
import { selectToolBar } from "../toolBar/toolBarSlice";

const initialState = {
    horarios: [
        {
            inicio: '09:39',
            fim: '11:11',
            desc: 'Teste',
            total: '1:32',
            id: '-LY-miP_YA9L03_5shZoC',
            totalMins: 92
        },
        {
            inicio: '03:17',
            fim: '11:17',
            desc: 'Teste2',
            total: '8:00',
            id: 'abacaxi',
            totalMins: 480
          }
    ],
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
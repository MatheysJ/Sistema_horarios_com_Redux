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
                console.log(state.horarios.filter(item => item.id !== action.payload.id))
                return {
                    horarios: state.horarios.filter(item => item.id !== action.payload.id)
                }
            }
        },
        editHorario: {
            reducer(state, action){
                console.log('Edit horário foi chamado')
            }
        },
        forwardDia: {
            reducer(state, action){
                console.log('Forward dia chamado')
            }
        },
        backDia: {
            reducer(state, action) {
                console.log('Back dia chamado')
            }
        }
    }
})

export const clickedWithTool = (estado, id) => (dispatch) => {
    console.log('Função chamada e executada')
    console.log(estado)
    if (estado == 'idle') {
        console.log('Estado igual a idle, nada deve acontecer')
    } else if (estado == 'delete') {
        console.log('Estado igual a delete:')
        dispatch(delHorario(id))
    } else if (estado == 'edit') {
        console.log('Estado igual a edit:')
        dispatch(editHorario(id))
    } else if (estado == 'forward') {
        console.log('Estado igual a forward:')
        dispatch(forwardDia())
    } else if (estado == 'back') {
        console.log('Estado igual a back:')
        dispatch(backDia())
    }
}

export const selectHoras = (state) => state.horas.horarios

export const { addHorario, delHorario, editHorario, forwardDia, backDia } = horasSlice.actions

export default horasSlice.reducer
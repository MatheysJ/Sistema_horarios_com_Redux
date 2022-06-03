import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHoras, selectMaxHoras, selectMaxMins } from '../../../features/horas/horasSlice'
import { getTotal } from './../../../common'

function Dados() {

    const list = useSelector(selectHoras)
    const minsDia = useSelector(selectMaxMins)

    const [totalMins, setTotalMins] = useState('')

    useEffect(() => {
        list && getTotal(setTotalMins, list)
    }, [list, minsDia])

    function getTempoRestante() {
        if (totalMins){

            let tempoRestante = totalMins.split(':')
            tempoRestante[0] = Number(tempoRestante[0])
            tempoRestante[1] = Number(tempoRestante[1])

            let totalDeMins = (tempoRestante[0] * 60) + tempoRestante[1]
            let restanteMins = minsDia - totalDeMins

            tempoRestante[0] = Math.floor(restanteMins / 60)
            tempoRestante[1] = restanteMins % 60
    
            return tempoRestante
        } 
        return undefined
    }



    return (
        <div className='form-dados'>
            <h2>{ totalMins ? `Faltam ${getTempoRestante()[0]} horas e ${getTempoRestante()[1]} minutos` : ''}</h2>
        </div>
    )
}

export default Dados
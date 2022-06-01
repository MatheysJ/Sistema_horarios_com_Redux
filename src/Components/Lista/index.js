import './style.css'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHoras } from '../../features/horas/horasSlice'
import Card from './Card'


export default function Lista() {

  const list = useSelector(selectHoras)

  useEffect(() => {
    getTotal()
    console.log(list)
  }, [list])

  const [totalAcumulado, setTotalAcumulado] = useState('')

  const getTotal = () => {

    let horas = Math.floor(list.reduce((totalMins, list) => totalMins + list.totalMins, 0) / 60)
    let mins = (list.reduce((totalMins, list) => totalMins + list.totalMins, 0) % 60)

    let total = (horas + ':' + mins)

    {
      horas || mins
        ?
        setTotalAcumulado(total)
        :
        setTotalAcumulado(0)
    }

  }

  const HorariosListados = () => {
    return (
      list.map(item => (
        <div key={item.id}>
          <Card item={item}/>
        </div>
      ))
    )
  }

  return (
    <div className='lista-box'>
      <div className='lista-horarios-box'>
        <HorariosListados />
      </div>
      <div className='lista-total-box'>
        <h3 className='lista-total'>Total: {totalAcumulado}</h3>
      </div>
    </div>
  )
}

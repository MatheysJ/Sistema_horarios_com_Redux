import './style.css'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHoras } from '../../features/horas/horasSlice'
import Card from './Card'
import { getTotal } from '../../common'


export default function Lista() {

  const list = useSelector(selectHoras)

  useEffect(() => {
    list && getTotal(setTotalAcumulado, list)
  }, [list])

  const [totalAcumulado, setTotalAcumulado] = useState('')

  const HorariosListados = () => {
    if (list){
      return (
        list.map(item => (
          <div key={item.id}>
            <Card item={item}/>
          </div>
        ))
      )
    }
    else {
      <></>
    }
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

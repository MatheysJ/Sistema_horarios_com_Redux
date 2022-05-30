import './style.css'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectHoras } from '../../features/horas/horasSlice'

export default function Lista() {

  const HorariosListados = () => {
    return(
      list.map(item => (
        <div key={item.id} className="lista-item">
          <p>Início: {item.inicio}</p>
          <p>Fim: {item.fim}</p>
          <p>Descrição: {item.desc}</p>
          <p>Tempo total: {item.total}</p>
        </div>
      ))
    )
  }

  const list = useSelector(selectHoras)

  console.log(list)

  return (
    <div className='lista-box'>
      <HorariosListados />
      <div className='lista-total-box'>
        <h3 className='lista-total'>Total: </h3>
      </div>
    </div>
  )
}

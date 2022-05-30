import './style.css'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHoras } from '../../features/horas/horasSlice'


export default function Lista() {

  const list = useSelector(selectHoras)

  useEffect(() => {
    getTotal()
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
    return(
      list.map(item => (
        <div key={item.id} className="lista-item">
          <div className='item-inicio-fim'>
            <div className='item-inicio'>
              <h4>Início: </h4><p>{item.inicio}</p>
            </div>
            <div className='item-fim'>
              <h4>Fim: </h4><p>{item.fim}</p>
            </div>
          </div>
          <div className='item-desc'>
            <h4>Descrição: </h4> <p>{item.desc}</p>
          </div>
          <div className='item-total'>
            <h4>Tempo total: </h4><p>{item.total}</p>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className='lista-box'>
      <HorariosListados />
      <div className='lista-total-box'>
        <h3 className='lista-total'>Total: {totalAcumulado}</h3>
      </div>
    </div>
  )
}

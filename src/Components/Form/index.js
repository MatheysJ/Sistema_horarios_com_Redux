import './style.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHorario } from '../../features/horas/horasSlice'
import moment from 'moment'

function FormHoras() {

  const dispatch = useDispatch()

  const [inicio, setInicio] = useState('')
  const [fim, setFim] = useState('')
  const [desc, setDesc] = useState('')
  
  const [ inicioValid, setInicioValid ] = useState(false)
  const [ fimValid, setFimValid ] = useState(false)

  const testarData = (data) => {
    const regexTime = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
    return regexTime.test(data)
  }

  const inicioChanged = e => {
    setInicio(e.target.value)
    if (testarData(e.target.value)){
      setInicioValid(true)
    } else {
      setInicioValid(false)
    }
  }

  const fimChanged = e => {
    setFim(e.target.value)
    if (testarData(e.target.value)){
      setFimValid(true)
    } else {
      setFimValid(false)

    }
  }
  
  const calcularTotal = (inicio, fim) => {
    let start = (moment(inicio, 'HH:mm'))
    let end = (moment(fim, 'HH:mm'))
    console.log(start)
    console.log(end)
    console.log(moment.duration(end.diff(start)))
    return moment.duration(end.diff(start))._data.hours + ':' + moment.duration(end.diff(start))._data.minutes
  }

  const totalInMinutes = (inicio, fim) => {
    let start = (moment(inicio, 'HH:mm'))
    let end = (moment(fim, 'HH:mm'))
    return (parseInt(moment.duration(end.diff(start))._data.minutes) + parseInt(moment.duration(end.diff(start))._data.hours) * 60)
  }

  const AdicionarHorario = () => {
    dispatch(addHorario({ inicio, fim, desc, total: calcularTotal(inicio, fim), totalMins: totalInMinutes(inicio, fim) }))
    setInicio('')
    setFim('')
    setDesc('')
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className='form-box-linha'>
        <div className='input-box'>
          <label htmlFor='horas-inicio'>Início</label>
          <input value={inicio} onChange={inicioChanged} id='horas-inicio'></input>
        </div>
        <div className='input-box'>
          <label htmlFor='horas-fim'>Fim</label>
          <input value={fim} onChange={fimChanged} id='horas-fim'></input>
        </div>
      </div>
      <div className='form-box-linha'>
        <div className='input-box-desc'>
          <label htmlFor='horas-desc'>Descrição</label>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} id='horas-desc' className='form-desc-input'></input>
        </div>
      </div>
        <div className='input-box'>
          <button disabled={!(fimValid && inicioValid)} onClick={AdicionarHorario} className='form-button'>Adicionar</button>
        </div>
          
    </form>
  )
}

export default FormHoras
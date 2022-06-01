import React, { useState } from 'react'
import './style.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { mudarEstado } from '../../features/toolBar/toolBarSlice';

function ToolBar() {

  const dispatch = useDispatch();

  const [deletar, setDeletar] = useState(false)
  const [editar, setEditar] = useState(false)
  const [avancar, setAvancar] = useState(false)
  const [voltar, setVoltar] = useState(false)

  const Deletar = () => {
    if (!deletar) {
      dispatch(mudarEstado('delete')) 
      setDeletar(true) 
      setEditar(false) 
      setAvancar(false)
      setVoltar(false)
    }
    else {
      dispatch(mudarEstado('idle')) &&
      setDeletar(false)
    }
  }
  const Editar = () => {
    if (!editar) {
      dispatch(mudarEstado('edit')) 
      setDeletar(false)
      setEditar(true)
      setAvancar(false)
      setVoltar(false)
    } 
    else {
      dispatch(mudarEstado('idle')) 
      setEditar(false)
    }
  }
  const Avancar = () => {
    if (!avancar) {
      dispatch(mudarEstado('forward')) 
      setDeletar(false) 
      setEditar(false) 
      setAvancar(true) 
      setVoltar(false)
    }
    else {        
      dispatch(mudarEstado('idle')) 
      setAvancar(false)
    }
  }
  const Retroceder = () => {
    if (!voltar) {
      dispatch(mudarEstado('back')) 
      setDeletar(false) 
      setEditar(false) 
      setAvancar(false) 
       setVoltar(true)
    }
    else {
      dispatch(mudarEstado('idle')) 
      setVoltar(false)
    }
  }

  return (
    <div className='ToolBar'>
        <div className={`TB-item ${deletar && 'TB-item-selecionado'}`} onClick={Deletar}><DeleteForeverIcon className='icon' /></div> {/* Deletar */}
        <div className={`TB-item ${editar && 'TB-item-selecionado'}`} onClick={Editar}><EditIcon className='icon' /></div> {/* Editar */}
        <div className={`TB-item ${avancar && 'TB-item-selecionado'}`} onClick={Avancar}><ArrowForwardIcon className='icon' /></div> {/* Avançar Dia */}
        <div className={`TB-item ${voltar && 'TB-item-selecionado'}`} onClick={Retroceder}><ArrowBackIcon className='icon' /></div> {/* Retroceder Dia */}
    </div>
  )
}

export default ToolBar
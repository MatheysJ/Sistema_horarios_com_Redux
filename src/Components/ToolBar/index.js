import React from 'react'
import './style.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { mudarEstado } from '../../features/toolBar/toolBarSlice';

function ToolBar() {

  const dispatch = useDispatch();

  const Deletar = () => {
    dispatch(mudarEstado('delete'))
  }
  const Editar = () => {
    dispatch(mudarEstado('edit'))
  }
  const Avancar = () => {
    dispatch(mudarEstado('forward'))
  }
  const Retroceder = () => {
    dispatch(mudarEstado('back'))
  }

  return (
    <div className='ToolBar'>
        <div className='TB-item' onClick={Deletar}><DeleteForeverIcon className='icon' /></div> {/* Deletar */}
        <div className='TB-item' onClick={Editar}><EditIcon className='icon' /></div> {/* Editar */}
        <div className='TB-item' onClick={Avancar}><ArrowForwardIcon className='icon' /></div> {/* Avançar Dia */}
        <div className='TB-item' onClick={Retroceder}><ArrowBackIcon className='icon' /></div> {/* Retroceder Dia */}
    </div>
  )
}

export default ToolBar
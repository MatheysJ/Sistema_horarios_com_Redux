import React from 'react'
import './style.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ToolBar() {
  return (
    <div className='ToolBar'>
        <div className='TB-item'><DeleteForeverIcon className='icon' /></div> {/* Deletar */}
        <div className='TB-item'><EditIcon className='icon' /></div> {/* Editar */}
        <div className='TB-item'><ArrowForwardIcon className='icon' /></div> {/* Avançar Dia */}
        <div className='TB-item'><ArrowBackIcon className='icon' /></div> {/* Retroceder Dia */}
    </div>
  )
}

export default ToolBar
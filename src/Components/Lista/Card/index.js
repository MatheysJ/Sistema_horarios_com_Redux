import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickedWithTool, delHorario } from '../../../features/horas/horasSlice';
import { selectToolBar } from '../../../features/toolBar/toolBarSlice';

function Card({item}) {

    const dispatch = useDispatch()
    const estadoTool = useSelector(selectToolBar)

    const cardClicked = () => {

      dispatch(clickedWithTool(estadoTool, {id: item.id}))
    }
  
    return(
        <div className="lista-item" onClick={() => cardClicked()}>
          
          <div className='item-inicio-fim'>
            
            <div className='item-inicio'>
              <h4>Início: </h4><p>{item.inicio}</p>
            </div>

            <div className='item-fim'>
              <h4>Fim: </h4><p>{item.fim}</p>
            </div>

          </div>

            {
            item.desc 
            ? 
            <div className='item-desc'><h4>Descrição: </h4> <p>{item.desc}</p></div>
            : 
            <></>
            }

          <div className='item-total'>
            <h4>Tempo total: </h4><p>{item.total}</p>
          </div>

        </div>
    )
}

export default Card
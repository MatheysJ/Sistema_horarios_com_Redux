import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mudarFerramenta } from '../../features/toolBar/toolBarSlice'
import FormHoras from '../Form'
import Lista from '../Lista'
import ToolBar from '../ToolBar'
import './style.css'

function Main(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mudarFerramenta({ferramenta: 'idle'}))
    })

    return(
        <main className='main-box'>
            <FormHoras />
            <Lista />
            <ToolBar />
        </main>
    )
}

export default Main
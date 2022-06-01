import FormHoras from '../Form'
import Lista from '../Lista'
import ToolBar from '../ToolBar'
import './style.css'

function Main(){
    return(
        <main className='main-box'>
            <FormHoras />
            <Lista />
            <ToolBar />
        </main>
    )
}

export default Main
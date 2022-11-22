import {Container} from './styles'
import {useState, KeyboardEvent} from 'react'

type Props = {
    onEnter: (taskName: string)=>void
  }

export const AddAreaTask = ({onEnter}: Props) =>{
    const [inputTask, setInputTask] = useState('')

    const addTeste = (e: KeyboardEvent)=>{
        if(e.code === 'Enter' && inputTask !== ''){
           onEnter(inputTask)
           setInputTask('')
        }
    }

    return(
        <Container>
            <div className='image'>➕</div>
            <input type='text' 
                placeholder='Adicione uma tarefa'
                value={inputTask}
                onChange={e => setInputTask(e.target.value)}
                onKeyUp={addTeste}/>
        </Container>
    )
}
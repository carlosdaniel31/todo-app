import {useState} from 'react'
import {Area, Container, Header} from './App.styles'
import { AddAreaTask } from './components/AddAreaTask';
import {ListItem} from './components/ListItem';
import { Item } from './types/item';

export default function App() {
  const [list, setList] = useState<Item[]>([
    { 
      id: 1,
      name: "Estudar programação",
      done: false
    },
    {
      id: 2,
      name: "Responder e-mails",
      done: false
    }
  ])

  const handleList = (taskName: string) =>{
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        <AddAreaTask onEnter={handleList}/>
        {list.map((task, index) =>(
          <ListItem key={index} item={task}/>
        ))}
      </Area>
    </Container>
  );
}
import {Container} from './styles'
import {Item} from '../../types/item'
import {useState} from 'react'

type Props = {
    item: Item
}

export const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return(
        <Container done={isChecked}>
            <input type="checkbox" 
                checked={isChecked} 
                onChange={(e)=> setIsChecked(e.target.checked)}>
            </input>            
            <p>{item.name}</p>
        </Container>
    )
}
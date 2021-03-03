import { useState } from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {v1 as uuid} from 'uuid'

const ShoppingList = () => {
  const [items, setItems] = useState([
    {id: uuid(), name: 'Egg'},
    {id: uuid(), name: 'Milk'},
    {id: uuid(), name: 'Steak'},
    {id: uuid(), name: 'Water'}
  ])

  const addItem = () => {
    const name = prompt('Enter Item')
    if(name) {
      setItems([...items, { id: uuid(), name }])
    }
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div>
      <Container>
        <Button
          color='dark'
          style={{marginBottom: '2rem'}}
          onClick={addItem}
        >Add Item</Button>

        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({id, name}) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => deleteItem(id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  )
}

export default ShoppingList

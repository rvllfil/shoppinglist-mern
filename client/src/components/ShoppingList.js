import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../redux/items/itemsActions'
import PropTypes from 'prop-types'

const ShoppingList = ({item, deleteItem}) => {
  const { items } = item
  const onDeleteClick = (id) => {
    deleteItem(id)
  }
  return (
    <div>
      <Container>
        <Button
          color='dark'
          style={{marginBottom: '2rem'}}
          
        >Add Item</Button>

        <ListGroup>
          <TransitionGroup className='shopping-list'>
          {items.map(({id, name}) => (
            <CSSTransition key={id} classNames='fade' timeout={800}>
              <ListGroupItem>
                <Button
                  className='remove-btn'
                  color='danger'
                  size='sm'
                  onClick={() => onDeleteClick(id)}
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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.items
})

export default connect(
  mapStateToProps, 
  { getItems, deleteItem }
)(ShoppingList)

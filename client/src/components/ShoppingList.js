import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems } from '../redux/items/itemsActions'
import PropTypes from 'prop-types'

const ShoppingList = ({item}) => {
  const { items } = item
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
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
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

export default connect(mapStateToProps, { getItems })(ShoppingList)

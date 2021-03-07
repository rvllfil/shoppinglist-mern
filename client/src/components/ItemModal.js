import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../redux/items/itemsActions'
import { useState } from 'react'

const ItemModal = ({ addItem }) => {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  
  const modalToggle = () => {
    setModal(!modal)
  }
  
  const onChange = (e) => {
    setName(e.target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    
    const newItem = {
      name: name
    }
    
    // Add item via addItem action
    addItem(newItem)
    // Close Modal
    setName('')
    modalToggle()

  }

  return (
    <div>
      <Button
        color='dark'
        style={{marginBottom: '2rem'}}
        onClick={modalToggle}
      >Add Item</Button>

      <Modal
        isOpen={modal}
        toggle={modalToggle}
      >
        <ModalHeader toggle={modalToggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='item'>Item</Label>
              <Input
                type='text'
                name='name'
                id='item'
                placeholder='Add Shopping Item'
                onChange={onChange}
              />
              <Button
                color='dark'
                style={{marginTop: '2rem'}}
                block
              >Add Item</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(
  mapStateToProps, {addItem}
)(ItemModal)


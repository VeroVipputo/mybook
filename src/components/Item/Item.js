
import React from 'react'
import Card from 'react-bootstrap/Card'
import FunctionCounter from '../FunctionCounter/FunctionCounter'
import Button from 'react-bootstrap/Button'


const Item = ({item}) => {
  return(

<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.pictureUrl} />
  <Card.Body>
    <Card.Title>{ item.title}</Card.Title>
    <Card.Text>
      <p>
      ${item.price}
      </p>
    </Card.Text>
    <Button variant="primary">Detalle</Button>
    <FunctionCounter stock={5} initial={0}/>
  </Card.Body>
</Card>
</div>

)
}
export default Item





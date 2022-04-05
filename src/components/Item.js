
import React from 'react'
import { Card } from 'react-boostrap'
import FunctionCounter from './FunctionCounter/FunctionCounter'


const Item = ({item}) => {
  return(

<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{ item.title}</Card.Title>
    <Card.Text>
      ${item.price}
    </Card.Text>
    <Button variant="primary">Detalle</Button>
    <FunctionCounter/>
  </Card.Body>
</Card>
</div>

)
}
export default Item;





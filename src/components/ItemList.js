
import React from 'react'
import Item from './Item/Item'


const ItemList = ({items}) => {
    return(

    <div>
       
        <ul>
        <h1>Productos</h1>
            {items.map((item) => {
                return  <Item key={item.id} item={item}/>})}
     
        </ul>

    </div>
   ) }
export default ItemList
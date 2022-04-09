
import React from 'react'

const ItemList = ({items}) => {
    return(

    <div>
       
        <ul>
        <h1>Productos</h1>
            {items.map((item) => {
                return  <item key={item.id} item={item}/>})}
        </ul>

    </div>
   ) }
export default ItemList
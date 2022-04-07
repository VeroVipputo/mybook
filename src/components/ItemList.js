
import React from 'react'
import Item from './Item/Item'
const ItemList = ({items}) => {

    return(

        <div>
            <h1>Productos</h1>
            <ul>
                {items.map((item => {
                    return <item key={item.id} item={item} />
                }))}


            </ul>


        </div>
    )

}
export default ItemList
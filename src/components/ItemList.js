
import React from 'react'
import Item from './Item'

const ItemList = ({item}) => {

    return(

        <div>
            <h1>Productos</h1>
            <ul>
                {item.maps((item => {
                    return <item key={item.id} item={item} />
                }))}


            </ul>


        </div>


    )




}
export default ItemList
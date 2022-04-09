import React from 'react'
import { useState, useEffect} from 'react'
import Item from './Item/Item';
import ItemList from './ItemList';




    const items =[{
            id: 1,
            title: "Martin Fierro",
            price: 2500,
            pictureUrl: "https://az.com.ar//public/assets//125/gc_1444581594tramaabierta-martinfierrocopy.jpg"},

            {id: 2,
            title: "Ulises, vuelve a casa",
            price: 1800,
            pictureUrl: "http://az.com.ar//public/assets//468/gt_1460137586cover-dioses-ulises.jpg"},

           {id: 3,
            title: "Hercules",
            price: 1800,
            pictureUrl: "http://az.com.ar//public/assets//208/gt_1460125546cover-dioses-hercules.jpg"}

    ];

    const ItemListContainer = ({greeting}) => {
     const [products, setProducts] = useState([]);
   
    
         useEffect(() => {
            let getItems = new Promise((resolve , reject) =>{
                setTimeout(() => {
                    items && items.length ? resolve (items) : reject ("error 404")
                }, 2000);
            })
            
            getItems.then((resolve) => {setProducts (resolve)})

         },[])

     
    return(
        <>

        <h1>{greeting}</h1>
       
                <ItemList  items={products} />
                
        </>
    );}
    
        

export default ItemListContainer
/*
fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros')
            .then(response => {
                return response.json()
            }).then( res => {
                console.log(res.results)
                setProducts(res.results)
            })*/
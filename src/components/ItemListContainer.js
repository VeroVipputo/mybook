import React from 'react'
import { useState, useEffect} from 'react'
import ItemList from './ItemList';




    const Items =[{
            id: 1,
            title: "Martin Fierro",
            price: 2500,
            pictureUrl: ""},

            {id: 2,
            title: "Segundo Sombra",
            price: 1800,
            pictureUrl: ""},

           {id: 3,
            title: "El hombre mediocre",
            price: 1800,
            pictureUrl: ""}

    ];

    const ItemListContainer = ({greeting}) => {
     const [products, setProducts] = useState([]);
   
    
         useEffect(() => {
            let getItems = new Promise((resolve , reject) =>{
                setTimeout(() => {
                    Items && Items.length ? resolve (Items) : reject ("error 404")
                }, 2000);
            })
            
            getItems.then((resolve) => {setProducts (resolve)})

         },[])

     
    return(
        <>

        <ol>
        <h1>{greeting}</h1>
        <hr />
                <ItemList  Items={products} />


        
        </ol>


        </>
    );
    }
        

export default ItemListContainer
/*
fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros')
            .then(response => {
                return response.json()
            }).then( res => {
                console.log(res.results)
                setProducts(res.results)
            })*/

import { useState, useEffect} from 'react'

export const Greeting = () => {


     const [products, setProducts] = useState([]);
   
    
         useEffect(() => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros')
            .then(response => {
                return response.json()
            }).then( res => {
                console.log(res.results)
                setProducts(res.results)
            })
         
         },[]
         
         )

     
    return(
        <>

       
       
        <ol>
        <h1>Catalogo</h1>
        <hr />
            <ul>
                {products.map(product => <img  key={product.id} src={product.thumbnail} ></img>   )}
               
            </ul>

        
        </ol>


        </>
    );
        }

export default Greeting;
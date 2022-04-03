import React, { useState} from 'react';

export const Greeting = () => {

     const [books, setBooks] = useState(['El Principito', 'Dracula','El Alquimista', 'Platero y yo', 'La isla del Tesoro']);
     const handleAdd = () => {
         setBooks([...books, 'El milagro de Js']);
     }
    return(
        <>

        <h1>Catalogo</h1>
        <hr />
        <button onClick={ handleAdd }>Agregar</button>
        <ol>
            {
                books.map(book=>{
                    return <li key={ book }> { book}</li>
                })

            }

        </ol>


        </>
    );
}

export default Greeting;
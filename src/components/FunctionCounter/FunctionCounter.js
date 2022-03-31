import { useState } from "react";

const FunctionCounter = () => {
    const [count, setCount] = useState (0)

    const increment = () =>{
        setCount (count + 1)
    }
    
    const decrement = () =>{
        setCount (count - 1)
    }

    return(
        <div>
            <button onClick={ decrement }>-</button>
            <p>{count}</p>
            <button onClick={ increment }>+</button>
        </div>
    )
}

export default FunctionCounter
import React, {useState} from 'react';

export default function Counter () {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>计数: {counter}</h1> 
            <button onClick={(e) => {setCounter(counter + 1)}}>+1</button>
            <button onClick={(e) => {setCounter(counter - 1)}}>-1</button>
        </div>
    )
}
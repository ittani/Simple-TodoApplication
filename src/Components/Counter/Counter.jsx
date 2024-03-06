import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton'

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementParentFunction(by) {
        setCount(count + by); 
    }

    function decrementParentFunction(by) {
        setCount(count - by); 
    }

    function restetCounter(by) {
        setCount(0); 
    }


    return (
        <>
         <span className="Totalcount">{count}</span>
    <CounterButton by={1} incrementMethod={incrementParentFunction} decrementMethod = {decrementParentFunction} />
   <CounterButton by={2} incrementMethod={incrementParentFunction} decrementMethod = {decrementParentFunction} />
   <CounterButton by={5} incrementMethod={incrementParentFunction} decrementMethod = {decrementParentFunction} />
   <button className='resetButton' onClick={restetCounter}
   
   >Reset</button>
        </>
  
    )
}

 
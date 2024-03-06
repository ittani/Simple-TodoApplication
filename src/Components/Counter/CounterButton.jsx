import {PropTypes} from 'prop-types'
import { useState } from 'react'

export default function CounterButton({by, incrementMethod, decrementMethod}){
    const [count, setCount] = useState(0);

  

    function IncrementCounter(){
        
       setCount(count + by)
       incrementMethod(by)
    }

    function decrementCounter(){
        setCount(count - by)
        decrementMethod(by)
    }


    return (
        <div className="Counter">
         <div>
         <button className="CounterButton" 
         onClick={IncrementCounter}

         >+{by}</button>

         <button className="CounterButton" 
         onClick={decrementCounter}

         >-{by}</button>

         </div>

        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}
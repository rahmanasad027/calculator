import React,{useState} from "react";
import './Operators.css'
const Operators = ({handleOperator,handleEqual,handleClear}) => {
const [operators,setOperators] = useState(['+','-','*','/'])
    return(
        <div className="keyPad_op">
            {operators.map((op,i) => {
                return(
                    <button key={i} name={op} onClick={(e)=>handleOperator(e)}>{op}</button>
                )
            })}
            <button onClick={handleEqual}>=</button>
            <button onClick={handleClear}>CL</button>
        </div>
    )
}

export default Operators;
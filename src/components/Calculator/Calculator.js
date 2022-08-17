import React, {useState} from "react";
import Keypad from "./keypad/numbers/Keypad";
import Operators from "./keypad/operators/Operators";
import Screen from "./screen/Screen";

const Calculator = () => {

    const [number, setNumber] = useState('')
    const [op,setOp] = useState('')
    const [isTrue,setIsTrue] = useState(false)

    const handleNumber = (e) => {
            setNumber(number + e.target.name)
    }
    const handleOperator=(e)=>{
        setNumber(number + e.target.name)
        setOp(e.target.name)
        setIsTrue(true)
    }

const handleClear = () => {
    setNumber('')
}

const handleEqual = () => {
    const num1 = number.substring(0,number.indexOf(op))
    const num2 = number.substring(number.indexOf(op) +1)
if(op==="+"){
    setNumber(String(Number(num1) + Number(num2)))
    setOp('')
    setIsTrue(false)
}if(op==="-"){
    setNumber(String(Number(num1) - Number(num2)))
    setOp('')
    setIsTrue(false)
}if(op==="*"){
    setNumber(String(Number(num1) * Number(num2)))
    setOp('')
    setIsTrue(false)
}if(op==="/"){
    setNumber(String(Number(num1) / Number(num2)))
    setOp('')
    setIsTrue(false)
}
}
    return(
        <div>
<Screen number = {number} />
<Keypad  handleNumber={handleNumber} />
<Operators handleOperator={handleOperator} handleEqual={handleEqual} handleClear={handleClear} />
        </div>
    )
}

export default Calculator;
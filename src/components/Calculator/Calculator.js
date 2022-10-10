import React, {useState} from "react";
import Keypad from "./keypad/Numbers/Numbers";
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
        if(e.target.name=== '='){
            const num1 = number.substring(0,number.indexOf(op))
            const num2 = number.substring(number.indexOf(op) +1)
            switch(op){
                case '+':
                    setNumber(String(Number(num1) + Number(num2)))
                break;
                case '-':
                    setNumber(String(Number(num1) - Number(num2)))
                break;
                case '*':
                    setNumber(String(Number(num1) * Number(num2)))
                break;
                case '/':
                    setNumber(String(Number(num1) / Number(num2)))
                break;
            }
            setOp('')
            setIsTrue(false)
        }
    }

const handleClear = () => {
    setNumber('')
}
    return(
        <div>
<Screen number = {number} />
<Keypad  handleNumber={handleNumber} />
<Operators handleOperator={handleOperator} handleClear={handleClear} />
        </div>
    )
}

export default Calculator;
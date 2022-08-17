import React,{useState} from "react";
import './keypad.css'
const Keypad = ({handleNumber}) => {
const [buttons,setButtons] = useState(['7','8','9','4','5','6','1','2','3','0','.'])

    return(
        <div className="keypad" style={{height:'100%'}}>
            <div className="keypad_keys">
            {
                buttons.map((btn,i) => {
                    return(
                        
                    <button key={i} name={btn} onClick={(e)=>handleNumber(e)}>{btn}</button>
                       
                    )
                })
            }
            </div>
        </div>
    )
}

export default Keypad;
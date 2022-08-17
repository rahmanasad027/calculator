import React from "react";
const Screen = ({number}) => {

    return(
        <div>
            <input
        style={{width:'100%', height:'150px', backgroundColor:'#172d67', color:'#fbfcfc',fontSize:'1.8rem'
       }}
        value={number}
/>
        </div>
    )
}

export default Screen;
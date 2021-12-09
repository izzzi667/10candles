import React, { useState } from "react";
import active from '../Static/candle.gif';
import inactive from '../logo.svg';


const Candle = (props) =>
{
    const [currentStatus, setStatus]=useState(true);
    const changeStatus = (props) => {
        setStatus(false);
    }

    
    return <img 
                src={currentStatus?active:inactive} 
                alt={''}  
                onClick={changeStatus}
            />
}

export default Candle;
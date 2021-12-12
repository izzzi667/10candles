import React, { useEffect, useState } from "react";
import active from '../Static/candle.gif';
import inactive from '../logo.svg';

const MIN_CANDLE_LIFE_TIME = 1;
const MAX_CANDLE_LIFE_TIME = 10;


const Candle = (props) =>
{
    const [currentStatus, setStatus]=useState(true);
    const changeStatus = (props) => {
        setStatus(false);
    }
    useEffect(() => {
        const candleLife = MIN_CANDLE_LIFE_TIME+Math.floor(Math.random() * (MAX_CANDLE_LIFE_TIME-MIN_CANDLE_LIFE_TIME)); 
        setTimeout(changeStatus, 1000*candleLife);
        
    }, [])

    
    return <img 
                src={currentStatus?active:inactive} 
                alt={''}  
                onClick={changeStatus}
            />
}


export default Candle;
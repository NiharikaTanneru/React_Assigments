
import { useEffect } from 'react';
import { useState } from 'react';
import './css/StopWatch.css'

function StopWacthComponent(){

    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);
     const  [stop,setStop]=useState(false);

   const onStart=()=>{
           setStop(true);
    }

    const onStop=()=>{
         setStop(false);  

    }

    useEffect(()=>{
          let interval=null;
          if(stop){
            interval=setInterval(()=>{
                if(minutes>59){
                    setHours(hours+1);
                    setMinutes(0);
                    clearInterval(interval);
                }
                if(seconds>59){
                    setMinutes(minutes+1);
                    setSeconds(0);
                    clearInterval(interval);
                }
                if(seconds<=59)
                {
                    setSeconds(seconds+1);
                }

            },100)
        }
            else {
                clearInterval(interval);
            }
            return ()=>{
                clearInterval(interval);
            }
          })

    return (
        <div className='stopwatch'>
       <div className="container">
       <div className="stopwatch-container">
       <h2> JavaScript Stop Watch</h2>

          <p>{hours}</p>
          <p>{minutes} </p>
          <p>{seconds}</p>
          
        
          <button className='start' onClick={onStart}>Start</button>
              <button className='stop' onClick={onStop}>Stop</button>
          </div>
              
        
        </div>
     </div>
    );
}
export default StopWacthComponent;

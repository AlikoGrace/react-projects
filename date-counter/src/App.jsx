
import { useState } from 'react';
import './App.css'

function App() {
 const [step,setStep]=useState(1);
 const[counter,setCounter]=useState(0);
   const currentDate=new Date()
   const formattedDate=currentDate.toLocaleString('en-US',
    {
      weekday:'long',
      day:'numeric',
      month:'long',
      year:'numeric'
    }
   )

   function handleReset(){
    setCounter(0)
    setStep(1)
   }

   const futureDate = new Date(currentDate);
   futureDate.setDate(currentDate.getDate()+ counter);

   const formattedFutureDate = futureDate.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
 
      return(
        <div>
          <div>
           {/* <button onClick={(i)=>setStep(step+1)}>+</button> */}
           <input min={0} max={10} type="range" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
           <span>{step}</span>
           {/* <button onClick={(i)=>setStep(step-1)}>-</button> */}
          </div>
          <div>
          <button onClick={(a)=>setCounter(counter-step)}>-</button>
          <input type="text" value={counter} onChange={(e)=>setCounter(Number(e.target.value))} />
           <button onClick={(a)=>setCounter(counter+step)} >+</button>
          </div>
           <p>{counter===0?`Today is ${formattedDate}`:
            `${counter} days from today will be ${formattedFutureDate}`
            }</p>   
            {counter !==0 || step!==1?(<div>
            <button onClick={handleReset}>Reset</button>
              </div>):null   } 
          
        </div>
      )
    }
    
    
      
export default App

import {useState } from "react";
import "../Styles/Counter.css";

function Counter(){
     const [count,setcount]=useState(0);
     const [message,setMessage]=useState("");
     const increment=()=>{
          if(count<10){
          setcount(count+1);
          setMessage("");
          }
          else{
               setMessage("Max limit Reached");
          }
     }
     const decrement=()=>{
          if(count>0) setcount(count-1);
          setMessage("");
     }
     const reset=()=>{
          setcount(0);
     }
return(
     <div className="Title">
          <h1>Counter App</h1>
          <h2>{count}</h2>
          <div className="btn">
               <button className="increment" onClick={increment}>Increment</button>
               <button className="decrement" onClick={decrement}>Decrement</button>
               <button className="reset" onClick={reset}>Reset</button>
          </div>
          {message && <p className="Message">{message}</p>}

     </div>
)
};
export default Counter;
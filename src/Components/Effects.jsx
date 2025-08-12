import React, { useEffect, useState } from 'react'
import "../Styles/Effects.css";
function Effects() {
     const [notes,setnotes]=useState("");

     useEffect(()=>{
      let count=0;
       const savednotes=localStorage.getItem("myNote");
       if(savednotes){
       setnotes(savednotes);
       console.log(count++);
       }},[]); //initial rendering.. 

     useEffect(()=>{
      const timer=setTimeout(()=>{
        localStorage.setItem("MyNote",notes);
        console.log("notes saved",notes);
      },2000)
      return()=>clearTimeout(timer);
     },[notes]);

  return (
   <div className="container">
      <h1>EffeCt NoTeS</h1>
      <textarea
      value={notes}
      onChange={(e) => setnotes(e.target.value)}
      placeholder="Start typin.."
      />
  </div>

  )
}

export default Effects
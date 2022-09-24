import React from 'react'
import { useState } from 'react'

function Form(props) {
  const [title,settitle]=useState("");
  const [weight,setweight]=useState("");
  const [color,setcolor]=useState("");
  const [location,setlocation]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('displaying');

    const data={
      itemtitle:title,
      itemweight:weight,
      itemcolor:color,
      itemlocation:location

    };
    props.addToListCallback(data);
   
  }


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
      <h1>Shipping form</h1>
    <center>  <input type="text" value={title} placeholder='Item name' onChange={(e) => settitle(e.target.value)}/><br></br>
     <input type="number" value={weight} placeholder='Item weight' onChange={(e) => setweight(e.target.value)}/><br></br>
    <input type="text" value={color} placeholder='Item color' onChange={(e) => setcolor(e.target.value)}/><br></br>
    <input type="text" value={location} placeholder='Item location' onChange={(e) => setlocation(e.target.value)}/><br></br>
      <button className='button'><h1>submit</h1></button>
      </center>
      </form> 
    </div>
  )
}



export default Form

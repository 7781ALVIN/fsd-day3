import { TextField } from '@mui/material'
import React, { useState } from 'react'

// function FormBasics() {
const FormBasics=() =>{
    var[inputs,setInputs] =useState({usename:'',email:'',place:''});
    const inputHandler=(e) => {
        console.log(e.target.value);
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
    }
   
  return (
    <div style={{marginTop:'10%',marginLeft:'45%'}}>
        <TextField variant='outlined'
        label="username"
        onChange={inputHandler}
        name="username"
        value={input.username}></TextField>

        <TextField variant='outlined'
        label="email"
         onChange={inputHandler}
        name="email"
        value={input.email}></TextField>

       <TextField variant='outlined'
        label="place"
         onChange={inputHandler}
        name="place"
        value={input.place}></TextField>
        <button>CLICK HERE</button>
 
    </div>
  )
}


export default FormBasics

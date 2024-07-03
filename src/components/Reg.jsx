import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

// function Reg () => {
const Reg =(props) => {
//   console.log(props.data)
//   var[val,setVal] = useState({Name:'',Age:'',place:''})
//   setVal({val,Name:props.data.name,Age:props.data.age,Place:props.data.place})

  return (
    <div>
     <TextField variant="outlined" label="name"/>
     <br></br>
      <TextField variant="outlined" label="age"/>
      <br></br>
      <TextField variant="outlined" label="email"/>
      <br></br>
      <TextField variant="outlined" label="father's name"/>
      <br></br>
      <TextField variant="outlined" label="mother'name"/>
      <br></br>
   
      <TextField variant="outlined" type='password' label="password"/>
      <br></br><br></br>

      <TextField variant="outlined" type= 'password' label=" confirm password"/>
      <br></br><br></br>
      <Button variant ="text">submit </Button>&nbsp;&nbsp;

    </div>
  )
}

export default Reg

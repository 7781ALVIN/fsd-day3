import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const Three = () => {
    var [name,setName] = useState("Click Any")
    const inputHandler1 = (e) => {
        setName("Welcome to Home");
    }
    const inputHandler2 = (e) => {
        setName("Welcome to Gallery");
    }
    const inputHandler3 = (e) => {
        setName("Welcome to Contact");
    }
  return (
    <div style={{textAlign: "center", marginTop: "15%"}}>
        {name}
        <br /><br />
      <Button variant="outlined" onClick={inputHandler1}>Home</Button>
      <Button variant="outlined" onClick={inputHandler2}>Gallery</Button>
      <Button variant="outlined" onClick={inputHandler3}>Contact</Button>
    </div>
  )
}

export default Three

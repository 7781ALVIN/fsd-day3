import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text"  placeholder='username'/>
      <br /><br />
      <input type="password"  placeholder='password'/>
      <br /><br />
      <button>Login</button>
      <br />
      <br />
      <Typography variant='h3'>login page</Typography>
      <br></br>
      <TextField variant="outlined" label="username"/>
      <br></br><br></br>
      <TextField variant="filled" label="password"/>
      <br></br><br></br>

      <TextField variant="standard" label="confirm password"/>
      <br /><br />
      <Button variant ="text">login </Button>&nbsp;&nbsp;
      <Button variant ="contained" color='success'>login</Button>&nbsp;&nbsp;

      </div>



  )
}

export default First

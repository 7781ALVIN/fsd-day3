import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button>
            <Link
            to={"/r"}
            style={{textDecoration:"none",color:"white"}}
            >
              Registration
            </Link  >
          </Button>
          <Button>
            <Link
            to={"/t"}
            style={{textDecoration:"none",color:"white"}}
            >
              Table
            </Link>
          </Button>
          <Button>
            <Link
            to={"/s"}
            style={{textDecoration:"none",color:"white"}}
            >
              State
            </Link>
          </Button>
          <Button>
            <Link
            to={"/b"}
            style={{textDecoration:"none",color:"white"}}
            >
              Buttons
            </Link>
          </Button>

          <Button>
            <Link
            to={"/f"}
            style={{textDecoration:"none",color:"white"}}
            >
              forms
            </Link>
          </Button>

          <Button>
            <Link
            to={"/p"}
            style={{textDecoration:"none",color:"white"}}
            >
              ApiGet
            </Link>
          </Button>
      
            <Button>
            <Link
            to={"/n"}
            style={{textDecoration:"none",color:"white"}}
            >
              Gridcard
            </Link>
          </Button>
{/*       
          <Button color="inherit">Login</Button>
          <Button color="inherit">Registration</Button>
          <Button color="inherit">Table</Button>
          <Button color="inherit">First</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Nav

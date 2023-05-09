import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './loginpages.module.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const AdminLogin = () => {
    return (<div className={styles.Box}>
        <Box
        sx={{
          display: 'flex',
          flexDirection:"column",
          justifyItems:'center',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <h1> Admin Sign In</h1>
        <TextField
          helperText="Please enter your Email"
          id="demo-helper-text-misaligned"
          label="Email"
        /> 
        <TextField
          helperText="Please enter your password"
          id="demo-helper-text-misaligned"
          label="password"
        />
         <Button variant='contained'>SignIn</Button>
         <li><Link to='/'><Button> Student ?</Button></Link></li>
      </Box>
      </div>
    )
}

export default AdminLogin;

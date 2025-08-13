import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


function Preview() {
  return (
    <>
      <Box component="section" sx={{ p: 2, textAlign: "center" }}>
        <Paper elevation={3} >
          <h2>Name</h2>
          <h6>Job Title</h6>
          <p> <span>Location </span> | <span>Email</span> | <span> phoneNumber</span> </p>
          <p>
            <Link href={""} > GITHUB </Link> |
            <Link href={""} > LINKEDIN </Link> |
            <Link href={""} > PORTFOLIO </Link>
          </p>
          <Divider><h6>SUMMARY</h6></Divider>
        </Paper>
      </Box>
    </>
  )
}

export default Preview
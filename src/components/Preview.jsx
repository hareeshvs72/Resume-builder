import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Preview() {
  return (
    <div style={{marginTop:"100px"}}>
      <Box component="section" >
        <Paper elevation={3} sx={{ p: 2, textAlign: "center" }} >
          <h2>Name</h2>
          <h6>Job Title</h6>
          <p> <span>Location </span> | <span>Email</span> | <span> phoneNumber</span> </p>
          <p>
            <Link href={""} > GITHUB </Link> |
            <Link href={""} > LINKEDIN </Link> |
            <Link href={""} > PORTFOLIO </Link>
          </p>
          <Divider sx={{ fontSize: "25px" }}>SUMMARY</Divider>
          <p className='fs-5 text-start'>User Summary</p>

          <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>EDUCATION</Divider>
          <h6>User education</h6>
          <p> <span>college </span> | <span>univercity</span> | <span> year</span> </p>

          <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>PROFESSIONAL EXPERIENCE</Divider>
          <h6>User JOB</h6>
          <p> <span>Company </span> | <span>location</span> | <span> duration</span> </p>

          <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Skills</Divider>

          <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{flexWrap:"wrap",gap:"10px"}}>
            
            
              <Button variant="contained">Contained</Button>
             
            
            
          </Stack>

        </Paper>
      </Box>
    </div>
  )
}

export default Preview
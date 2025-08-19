import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link, Links } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaTrash } from "react-icons/fa";

function History() {
  return (
    <div>
         <div  className='my-3'>
            <h1 className='text-center'>Resume Downloaded History</h1>
          <Link to={'/'} style={{marginTop:'-40px',textDecoration:'none'}}  className='me-5 float-end fw-bold '>BACK</Link>
         </div>
        <Box component="section" className='container-fluid' >
        <div className='row'>
        <div className='col-md-4 m-3'>
            <Paper elevation={3} sx={{my:5, p: 5, textAlign: "center" }} >
              <div className='d-flex align-items-center justify-content-evenly '>
                <h6 className=''>Review At :<br/> 15/05/2025 , 9:32 am</h6>
                <button className='btn text-danger  ms-5' style={{fontSize:'20px'}}><FaTrash /></button>
                </div>
             
            <div className='border rounded p-3 '>
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
            </div>
    
            </Paper>
        </div>
        </div>
      </Box>
    </div>
  )
}

export default History
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';

function Preview({ userInput,finish}) {
  // console.log(userInput);

  return (
     
   

    < >

      <Stack direction={'row'} sx={{ margin: '20px', justifyContent: 'flex-end' }}>

        <Stack direction={'row'} className='d-flex align-items-center ' >
          {/* download */}
          <button className='btn fs-3 text-primary' ><FaFileDownload /></button>

          {/* edit */}

          <div><Edit /></div>

          {/* history */}
          <Link to={'/History'} className='btn fs-3 text-primary' ><FaHistory /></Link>
          <div className='d-flex align-items-center  ' >
            <Link to={'/resume'} className='btn  text-primary fw-bold ' >BACK</Link>
          </div>
        </Stack>

      </Stack>

      <Box component="section" >
        <Paper elevation={3} sx={{ p: 2, textAlign: "center" }} >
          <h2>  {userInput.personalDetails.name}</h2>
          <h6>  {userInput.personalDetails.jobTitle}</h6>
          <p> <span> {userInput.personalDetails.location} </span> | <span> {userInput.personalDetails.email} </span> | <span>  {userInput.personalDetails.phoneNumber} </span> </p>
          <p>
            <Link href={userInput.personalDetails.githubLink} > GITHUB </Link> |
            <Link href={userInput.personalDetails.linkedinLink} > LINKEDIN  </Link> |
            <Link href={userInput.personalDetails.portfolioLink} > PORTFOLIO  </Link>
          </p>
          <Divider sx={{ fontSize: "25px" }}>SUMMARY</Divider>
          <p className='fs-5 text-start'>{userInput.summary}</p>

          <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>EDUCATION</Divider>
          <h6>{userInput.educationDetails.course}</h6>
          <p> <span>{userInput.educationDetails.college} </span> | <span>{userInput.educationDetails.univercity}</span> | <span> {userInput.educationDetails.year}</span> </p>

          <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>PROFESSIONAL EXPERIENCE</Divider>
          <h6>{userInput.experience.jobRole}</h6>
          <p> <span>{userInput.experience.company} </span> | <span>{userInput.experience.jobLocation}</span> | <span> {userInput.experience.duration}</span> </p>

          <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Skills</Divider>

          <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{ flexWrap: "wrap", gap: "10px" }}>

            {userInput.skill?.map((skill) => (
              <Button key={skill} variant="contained">{skill}</Button>
            ))}




          </Stack>

        </Paper>
      </Box>
      
    </>

  )
}

export default Preview
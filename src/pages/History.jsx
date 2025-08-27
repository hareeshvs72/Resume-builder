import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link, Links } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaTrash } from "react-icons/fa";
import { getHistoryApi , deleteHistory } from '../services/allAPI';

function History() {

  const [resume, setResume] = useState([])

  useEffect(() => {
    getHistory()
  }, [resume])

  const getHistory = async () => {
    try {
      const result = await getHistoryApi()
      // console.log(result);
      setResume(result.data)

    } catch (error) {
      console.log(error);

    }
  }
  // console.log(resume);
  const handileHistoryDelete = async (id)=>{
   try {
      await deleteHistory(id)
    getHistory()
   } catch (error) {
     console.log(error);
     
   }

  }


  return (
    <div>
      <div className='my-3'>
        <h1 className='text-center'>Resume Downloaded History</h1>
        <Link to={'/'} style={{ marginTop: '-40px', textDecoration: 'none' }} className='me-5 float-end fw-bold '>BACK</Link>
      </div>
      <Box component="section" className='container-fluid' >
        <div className='row'>
          {
            resume.length > 0 ?
              resume?.map((item, index) => (

                <div className='col-md-4 ' key={index}>
                  <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: "center" }} >
                    <div className='d-flex align-items-center justify-content-evenly '>
                      <h6 className=''>Review At :<br /> {item?.timeStamp}</h6>
                      <button onClick={()=>handileHistoryDelete(item?.id)} className='btn text-danger  ms-5' style={{ fontSize: '20px' }}><FaTrash /></button>
                    </div>

                    <div className='border rounded p-3 '>
                      <img className='img-fluid' src={item?.imgURL} alt="history" />
                    </div>

                  </Paper>
                </div>
              ))

              :
              <p>History Is Unavilable</p>
          }

        </div>
      </Box>
    </div>
  )
}

export default History
import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div style={{height:'80vh',backgroundImage:"url('https://cdn.dribbble.com/userupload/23971921/file/original-d46459760ea9d4b877e1c4a2be9c9334.gif')",backgroundRepeat:'none',backgroundSize:'cover',backgroundPosition:'center'}} className='d-flex flex-column justify-content-center'  >
        
           <div className='d-flex align-items-center justify-content-center flex-column'> 
            <h1>Page Not Found </h1>
             <Link to={"/"}>
             <Button variant="contained">Go Home</Button>
             </Link>
            </div>
      </div>
  )
}

export default PageNotFound
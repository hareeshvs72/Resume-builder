import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ResumeGenerator() {
  return (
    <>
      <section className='p-5'>
        <h4 className='text-center'>Create a job-winning Resume In minutes</h4>
        <div className="row mt-5 p-4">
          <div className="col-md-6 col-6  d-flex align-items-center justify-content-center " >
            <div className="card shadow"style={{width:"28rem",height:"25rem"}} >
              <div className="card-body d-flex align-items-center justify-content-center flex-column">
                  <FaBook className='text-primary fs-1 mb-3  '/>
                  <h3 className='mt-2'>Add Your Information</h3>
                  <h5 className='mt-2 text-center'>Add pre-written  examples  to each  section</h5>
                  <h4 className='mt-2 fw-bold'>Step 1</h4>
              </div>
            </div>
          </div>
           <div className="col-md-6 col-6  d-flex align-items-center justify-content-center " >
            <div className="card shadow"style={{width:"28rem",height:"25rem"}} >
              <div className="card-body d-flex align-items-center justify-content-center flex-column">
                  <FaFileDownload className='text-danger fs-1 mb-3 '/>
                  <h3 className='mt-2'>Download Your Resume</h3>
                  <h5 className='mt-2'>Download And Start Applying</h5>
                  <h4 className='mt-2 fw-bold'>Step 2</h4>
              </div>
            </div>
          </div>
        </div>
       <Link to={'/UserForm'} className='d-flex align-items-center justify-content-center'>
           <button className='btn btn-primary rounded mb-2'>Make Your Resume</button>
          </Link>
      </section>
    </>
  )
}

export default ResumeGenerator
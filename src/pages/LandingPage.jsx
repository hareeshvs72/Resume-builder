

import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <section id='part1' style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlHGORva5j0LVQgMmIKEr3PLind6EntdANA&s')",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >
      <div className="row pt-5">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 text-center py-5 my-5 box border border-dark rounded">
          <h3>Desiged to get Hierd</h3>
          <h4>Your Skills,Your Story , Your Next Job - all in come</h4>
          <Link to={'/resume'}>
           <button className='btn btn-primary rounded'>Make Your Resume</button>
          </Link>
        </div>
        <div className="col-12 col-md-4"></div>
      </div>
    </section>
    
    </>
  )
}

export default LandingPage

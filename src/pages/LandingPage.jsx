

import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <section id='part1' style={{width:'100%',overflowX:'hidden',height:'100vh',backgroundImage:"url('https://img.pikbest.com/origin/10/49/76/89xpIkbEsTfDm.jpg!w700wp')",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >
      <div className="row pt-5 ">
        <div className="col-12 col-md-4"></div>
        <div className="   col-12 col-md-4 text-center py-5 my-5  border border-dark rounded" style={{backgroundColor:"rgb(255,255,255,.5)"}}>
          <h3>Desiged to get Hierd</h3>
          <h4>Your Skills,Your Story , Your Next Job - all in come</h4>
          <Link to={'/resume'}>
           <button className='btn btn-primary rounded'>Make Your Resume</button>
          </Link>
        </div>
        <div className="col-12 col-md-4"></div>
      </div>
    </section>

    <section  id='part2' className='tools p-5'>
      <h1 className='text-center'>Tools</h1>
       <div className='row'>
         <div className='tools-content col-12 col-md-6 d-flex align-items-center justify-content-center flex-column '>

             <div>
                 <h4>Resume</h4>
                 <p>create ultimate new resume and easily edit afterwards</p>
  
                 <h4>Cover Letter </h4>
                 <p>easily write professional cover letter</p>
  
                 <h4>Jobs</h4>
                 <p>Automaticaly recive new jobs and relevent job posting</p>
  
                 <h4>Application</h4>
                 <p>effortless manage and track your job application in a originized manner</p>
             </div>

         </div>
         <div className='tool-image  col-12 col-md-6'>
          <img width={"100%"} src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png" alt="toolimage" />
         </div>
       </div>
    </section>
     
    <section id='part3' style={{width:'100%',overflowX:'hidden',height:'100vh',backgroundImage:"url('https://img.pikbest.com/origin/10/49/76/89xpIkbEsTfDm.jpg!w700wp')",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >
    </section>

    <section   id='part4' className='tesimonial container-fluid p-5'>
      <h1 className='text-center'>Testimonial</h1>
       <div className='row'>
         <div className='tesimonial-content col-12 col-md-6 d-flex align-items-center justify-content-center flex-column '>

             <div>
                 <h4>Trusted by Professionals</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at unde eveniet! Animi, unde eveniet commodi enim odio voluptatum a? Illo, deleniti? Saepe numquam vel, quaerat dolor quod optio quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae facere est sapiente unde atque cum illo fuga quam magnam deleniti quas dolorum, velit eum! Voluptatem quaerat labore nesciunt tenetur magnam.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad eum explicabo, impedit doloremque consectetur tempora mollitia temporibus officiis! Atque consectetur accusamus molestiae cupiditate, expedita sint iure consequuntur necessitatibus magni?</p>
             </div>

         </div>
         <div className='tesimonial-image  col-12 col-md-6'>
            <div className="row row-gap-2">
               <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0fMNCa8OuzUIQCkYbZoAc5dT0TSOGHQHRw&s" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4eBLJ7vpy1_8bUK6gphgMfhQDcV5UieW1g&s" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0fMNCa8OuzUIQCkYbZoAc5dT0TSOGHQHRw&s" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0fMNCa8OuzUIQCkYbZoAc5dT0TSOGHQHRw&s" alt="" />
               </div>
                <div className="col-3">
                 <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Qx3OlV-4FBqJDV5x234__0JoqNzr0c3GOQ&s" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Qx3OlV-4FBqJDV5x234__0JoqNzr0c3GOQ&s" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Qx3OlV-4FBqJDV5x234__0JoqNzr0c3GOQ&s" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Qx3OlV-4FBqJDV5x234__0JoqNzr0c3GOQ&s" alt="" />
               </div>

               <div className="col-3">
                 <img width={"100%"} src="https://www.nicepng.com/png/detail/101-1013552_testimonial-gentleman.png" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://www.nicepng.com/png/detail/101-1013552_testimonial-gentleman.png" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://www.nicepng.com/png/detail/101-1013552_testimonial-gentleman.png" alt="" />
               </div>
               <div className="col-3">
                 <img width={"100%"} src="https://www.nicepng.com/png/detail/101-1013552_testimonial-gentleman.png" alt="" />
               </div>
            </div>
         </div>
       </div>
    </section>

    </>
  )
}

export default LandingPage

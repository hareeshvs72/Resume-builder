import React from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'


function UserForm() {
     const [userInput , setUserInput] = React.useState({
        personalDetails:{
          name:'',
          jobTitle:'',
          location:'',
          email:'',
          phoneNumber:'',
          githubLink:'',
          linkedinLink:'',
          portfolioLink:''
        },
        educationDetails:{
          course:'',
          college:'',
          univercity:'',
          year:''
    
        },
        experience:{
          jobRole:'',
          company:'',
          jobLocation:'',
          duration:'',
    
        },
        skill:[],
        summary:''
    
    
      })
  return (
    <>
         <div className="container">
          <div className="row p-5">
            <div className="col-lg-6">

               <Steps userInput={userInput} setUserInput={setUserInput} />

            </div>
            <div className="col-lg-6 ">
                  <Preview userInput={userInput}/>
            </div>
          </div>
         </div>

    </>
  )
}

export default UserForm
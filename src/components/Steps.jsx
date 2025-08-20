import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certification','Review & Submit '];



function Steps() {

  const skillSugetionArray = ['HTML','CSS','Java Script','Bootstrap','Tailwind','React','Node JS','GIT']
   const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // state for storing user input data

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

  const userSkillRef = React.useRef()

  console.log(userInput);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  
    const handleReset = () => {
    setActiveStep(0);
  };
  // add skills
      
  const addSkill = (inputSkill)=>{
         if(inputSkill){
           if(userInput.skill.includes(inputSkill) ){
                alert("skill Already Existing !!! Add Another")
           }
           else{
              //  userInput.skill.push(inputSkill)
              setUserInput({...userInput,skill:[...userInput.skill,inputSkill]})
           }
         }
  }
  const removeSkill = (skillss)=>{
     setUserInput({...userInput,skill:userInput.skill.filter((item )=>item!=skillss)})
     
  }

  // render the contnet corresponding array index
    const renderStepArrayContent = (StepCount)=>{
      switch(StepCount){
        case 0 : return(
          <div>
            <h3>Personal Details</h3>
            <div className="row p-3 d-flex">
               <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,name:e.target.value}
               })} value={userInput.personalDetails.name}  />
                <TextField id="standard-basic-job" label="JOb Title" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,jobTitle:e.target.value}
               })} value={userInput.personalDetails.jobTitle}  />
                 <TextField id="standard-basic-localation" label="Location" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,location:e.target.value}
               })} value={userInput.personalDetails.location}   />
                
            </div>
          </div>
        )
         case 1 : return(
          <div>
            <h3>Personal Details</h3>
            <div className="row p-3 d-flex">
                  <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,email:e.target.value}
               })} value={userInput.personalDetails.email}  />
                <TextField id="standard-basic-phone" label="PhoneNumber" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,phoneNumber:e.target.value}
               })} value={userInput.personalDetails.phoneNumber}   />
                 <TextField id="standard-basic-github" label="Github Link" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,githubLink:e.target.value}
               })} value={userInput.personalDetails.githubLink}  />
                 <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,linkedinLink:e.target.value}
               })}  />
                 <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e=>setUserInput({
                ...userInput,personalDetails:{...userInput.personalDetails,portfolioLink:e.target.value}
               })}  value={userInput.personalDetails.portfolioLink}  />
            </div>
          </div>
        )
        case 2 : return(
          <div>
            <h3>Education Details</h3>
            <div className="row p-3 d-flex">
               <TextField id="standard-basic-Course" label="Course Name" variant="standard" onChange={e=>setUserInput({
                ...userInput,educationDetails:{...userInput.educationDetails,course:e.target.value}
               })} value={userInput.educationDetails.course}  />
                <TextField id="standard-basic-College" label="College Name" variant="standard" onChange={e=>setUserInput({
                ...userInput,educationDetails:{...userInput.educationDetails,college:e.target.value}
               })} value={userInput.educationDetails.college}  />
                 <TextField id="standard-basic-Univercity" label="Univercity" variant="standard" onChange={e=>setUserInput({
                ...userInput,educationDetails:{...userInput.educationDetails,univercity:e.target.value}
               })} value={userInput.educationDetails.univercity}  />
                 <TextField id="standard-basic-Year" label="Year Of Passout" variant="standard" onChange={e=>setUserInput({
                ...userInput,educationDetails:{...userInput.educationDetails,year:e.target.value}
               })} value={userInput.educationDetails.year} />
                
            </div>
          </div>
        )
        case 3 : return(
          <div>
            <h3>Professional Details</h3>
            <div className="row p-3 d-flex">
               <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e=>setUserInput({
                ...userInput,experience:{...userInput.experience,jobRole:e.target.value}
               })}  value={userInput.experience.jobRole} />
                <TextField id="standard-basic-Company" label="Company Name" variant="standard" onChange={e=>setUserInput({
                ...userInput,experience:{...userInput.experience,company:e.target.value}
               })}  value={userInput.experience.company}   />
                 <TextField id="standard-basic-comploc" label="Company Location " variant="standard" onChange={e=>setUserInput({
                ...userInput,experience:{...userInput.personalDetails,jobLocation:e.target.value}
               })}  value={userInput.experience.jobLocation}  />
                 <TextField id="standard-basic-Duration" label="Duration" variant="standard" onChange={e=>setUserInput({
                ...userInput,experience:{...userInput.experience,duration:e.target.value}
               })} value={userInput.experience.duration}  />
                
            </div>
          </div>
        )
        case 4 :
          return(
           <div>
            <h3>Skills</h3>
              <div className='d-flex align-items-center justify-content-between p-3'>
                {/* <TextField sx={{width:'400px'}} id="standard-basic-skill" label="Job or Internship" variant="standard" /> */}
                <input ref={userSkillRef} type="text" className='form-control' placeholder='Add Skills' />
                <Button variant="text" onClick={()=>addSkill(userSkillRef.current.value)} >Add</Button>
              </div>
              <h5>Suggetions</h5>
              <div className="d-felx flex-wrap justify-content-between my-3">
                {
                  skillSugetionArray.map(userSkill=>(
                   
                    <Button className='m-2' onClick={()=>addSkill(userSkill)} key={userSkill} variant="contained">{userSkill}</Button> 
                  ))
                }
              </div>
              <h5>Add Skills</h5>
              <div className="d-felx flex-wrap justify-content-between my-3">
                {/* span must dupliact */}
                  
                {  
                      userInput.skill.length>0?
                      userInput.skill.map((skills)=>(
                        <span key={skills} className='btn btn-primary d-felx m-1 align-items-center justify-content-center '>{skills} <button onClick={()=>removeSkill(skills)} className='btn text-light'>X</button> </span>
                      )) : "no skills"
                      
                 }
              </div>
           </div>
          )
         case 5 : return(
          <div>
            <h3>Professional Summary</h3>
            <div className="row p-3 d-flex">
               <TextField id="standard-basic-role" label="Write a short summary" variant="standard" multiline rows={4} defaultValue={"Motivated and detail-oriented beginner in web development with foundational knowledge of HTML, CSS, and JavaScript. Eager to learn new technologies and build practical projects. Strong problem-solving skills and a commitment to continuous improvement."} onChange={e=>setUserInput({
               ...userInput,summary:e.target.value
               })}  value={userInput.summary}  />
                
            </div>
          </div>
        )
        default: return null
      }
    }

  return (
    
    <Box sx={{ width: '100%' }}>
      
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          
          {/* vie of each step */}
               
                 {renderStepArrayContent(activeStep)}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps
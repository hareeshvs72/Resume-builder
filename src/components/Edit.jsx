
import { FaEdit } from "react-icons/fa";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { getResumeApiEdit ,editResumeApi } from '../services/allAPI';
import swal from 'sweetalert';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ resumeid ,setUserInputUpdate }) {
    const [open, setOpen] = React.useState(false);
    const [userInput, setUserInput] = React.useState({});
    const [userSkill , setUserSkill] = React.useState("")
    // console.log(userInput)

    React.useEffect(() => {
        resumeid && getEditResumeDetails()
    }, [resumeid])

    const getEditResumeDetails = async () => {
        try {
            const result = await getResumeApiEdit(resumeid)
            setUserInput(result?.data)
        } catch (err) {
            console.log(err);

        }

    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = ()=>{
        if(userSkill){
            if(userInput.skill.includes(userSkill) ){
                alert("skill Already Existing !!! Add Another")
           }
           else{
              //  userInput.skill.push(inputSkill)
              setUserInput({...userInput,skill:[...userInput.skill,userSkill]})
              
           }
            setUserSkill("")
        }
       
    }
    

      const removeSkill = (skillss)=>{
     setUserInput({...userInput,skill:userInput.skill.filter((item )=>item!=skillss)})
     
  }
    
   const handileUpdateEdit = async ()=>{
    try {
        const result = await editResumeApi(userInput?.id,userInput)
        setUserInputUpdate(result?.data)
        swal("success !", "Resume Update Successfully", "success")
        handleClose()
    } catch (error) {
        console.log(error);
        
    }
   }

    return (
        <>
            <button onClick={handleOpen} className='btn fs-3 text-primary' ><FaEdit /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal details */}


                        <h3>Personal Details</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, name: e.target.value }
                            })} value={userInput?.personalDetails?.name} />
                            <TextField id="standard-basic-job" label="JOb Title" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, jobTitle: e.target.value }
                            })} value={userInput?.personalDetails?.jobTitle} />
                            <TextField id="standard-basic-localation" label="Location" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, location: e.target.value }
                            })} value={userInput?.personalDetails?.location} />

                        </div>

                        {/* contact details */}

                        <h3>Contact Details</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, email: e.target.value }
                            })} value={userInput?.personalDetails?.email} />
                            <TextField id="standard-basic-phone" label="PhoneNumber" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, phoneNumber: e.target.value }
                            })} value={userInput?.personalDetails?.phoneNumber} />
                            <TextField id="standard-basic-github" label="Github Link" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, githubLink: e.target.value }
                            })} value={userInput?.personalDetails?.githubLink} />
                            <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, linkedinLink: e.target.value }
                            })} value={userInput?.personalDetails?.linkedinLink} />
                            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalDetails: { ...userInput.personalDetails, portfolioLink: e.target.value }
                            })} value={userInput?.personalDetails?.portfolioLink} />
                        </div>

                        {/* Education details */}

                        <h3>Education Details</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-Course" label="Course Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, educationDetails: { ...userInput.educationDetails, course: e.target.value }
                            })} value={userInput?.educationDetails?.course} />
                            <TextField id="standard-basic-College" label="College Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, educationDetails: { ...userInput.educationDetails, college: e.target.value }
                            })} value={userInput?.educationDetails?.college} />
                            <TextField id="standard-basic-Univercity" label="Univercity" variant="standard" onChange={e => setUserInput({
                                ...userInput, educationDetails: { ...userInput.educationDetails, univercity: e.target.value }
                            })} value={userInput?.educationDetails?.univercity} />
                            <TextField id="standard-basic-Year" label="Year Of Passout" variant="standard" onChange={e => setUserInput({
                                ...userInput, educationDetails: { ...userInput.educationDetails, year: e.target.value }
                            })} value={userInput?.educationDetails?.year} />

                        </div>

                        {/* frofecinal details */}

                        <h3>Professional Details</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, jobRole: e.target.value }
                            })} value={userInput?.experience?.jobRole} />
                            <TextField id="standard-basic-Company" label="Company Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, company: e.target.value }
                            })} value={userInput?.experience?.company} />
                            <TextField id="standard-basic-comploc" label="Company Location " variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value }
                            })} value={userInput?.experience?.jobLocation} />
                            <TextField id="standard-basic-Duration" label="Duration" variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, duration: e.target.value }
                            })} value={userInput?.experience?.duration} />

                        </div>
                        {/* skills */}
                        <h3>Skills</h3>
                        <div className='d-flex align-items-center justify-content-between p-3'>
                            <TextField onChange={(e)=>setUserSkill(e.target.value)} sx={{ width: '400px' }} id="standard-basic-skill" label="Add skill" variant="standard" value={userSkill} />
                            <Button onClick={addSkill} variant="text">Add</Button>
                        </div>

                        <h5>Selected Skill</h5>
                        <div className="d-flex flex-wrap justify-content-between my-3">
                            {
                             userInput?.skill?.length>0 &&
                              userInput?.skill?.map((item)=>(
                                <span key={item} className='btn my-2 btn-outline-primary d-flex align-items-center justify-content-center '>{item} <button className='btn text-light' onClick={()=>removeSkill(item)} >X</button></span>

                              ))
                             }
                        </div>

                        {/*  Summary*/}


                        <h3>Professional Summary</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-role" label="Write a short summary" variant="standard" multiline rows={4} value={userInput?.summary} onChange={(e)=>setUserInput({...userInput,summary:e.target.value})} />

                        </div>


                    </Typography>
                    <Button variant="contained" onClick={handileUpdateEdit} >Update</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit
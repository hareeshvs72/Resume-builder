
import { FaEdit } from "react-icons/fa";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField id="standard-basic-job" label="JOb Title" variant="standard" />
                            <TextField id="standard-basic-localation" label="Location" variant="standard" />

                        </div>

                        {/* contact details */}

                        <h3>Personal Details</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-email" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="PhoneNumber" variant="standard" />
                            <TextField id="standard-basic-github" label="Github Link" variant="standard" />
                            <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                        </div>

                        {/* Education details */}

                        <h3>Education Details</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-Course" label="Course Name" variant="standard" />
                            <TextField id="standard-basic-College" label="College Name" variant="standard" />
                            <TextField id="standard-basic-Univercity" label="Univercity" variant="standard" />
                            <TextField id="standard-basic-Year" label="Year Of Passout" variant="standard" />

                        </div>

                        {/* frofecinal details */}

                        <h3>Professional Details</h3>
                        <div className="row p-3 d-flex">
                            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" />
                            <TextField id="standard-basic-Company" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-comploc" label="Company Location " variant="standard" />
                            <TextField id="standard-basic-Duration" label="Duration" variant="standard" />

                        </div>
                        {/* skills */}
                        <h3>Skills</h3>
                        <div className='d-flex align-items-center justify-content-between p-3'>
                <TextField sx={{width:'400px'}} id="standard-basic-skill" label="Job or Internship" variant="standard" />
                <Button variant="text">Add</Button>
              </div>

              <h5>Add Skills</h5>
              <div className="d-felx flex-wrap justify-content-between my-3">
                 <span className='btn btn-outline-primary d-felx align-items-center justify-content-center '>React <button className='btn text-light'>X</button> </span>
              </div>

                        {/*  Summary*/}


                        <h3>Professional Summary</h3>
                                    <div className="row p-3 d-flex">
                                       <TextField id="standard-basic-role" label="Write a short summary" variant="standard" multiline rows={4}  />
                                        
                                    </div>


                    </Typography>
                    <Button variant="contained">Update</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit
import React from "react";
import {Typography,Button} from '@mui/material';
import './User.css';

function User(){
    return(
        <div className="container">
            <div>
                <div>
                    <Typography variant="h5">Welcome to QuizMaker</Typography>
                </div>
                <br/>
                <div >
                    <Button variant="outlined" href="https://cool-frangipane-8ecd98.netlify.app/user/student">Student</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="outlined" href="https://cool-frangipane-8ecd98.netlify.app/user/admin">Admin</Button>
                </div>
            </div>
        </div>
    );
}

export default User;
import React from "react";
import QuizIcon from '@mui/icons-material/Quiz';
import {Typography} from '@mui/material';
import './Home.css';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

function Home(){

    const change=()=>{
        localStorage.setItem('LOG',"welcome");
    }
    
    return(
        <div className="container">
            <div>
                <div>
                    <Typography variant="h4">
                        <QuizIcon/>&nbsp;
                        Sign In To QuizMaker
                    </Typography>
                </div>
                <br/>
                <div className="button">
                    <Button variant="outlined" href="https://quiz-maker12.herokuapp.com/auth/google" onClick={change}><GoogleIcon/> &nbsp; Sign In With Google </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;
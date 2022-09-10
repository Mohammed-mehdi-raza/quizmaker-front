import React,{useState,useEffect} from "react";
import QuizIcon from '@mui/icons-material/Quiz';
import {Typography,Button} from '@mui/material';
import './Header.css';

function Header(){

    const [val,setVal]=useState(0);

    const click=()=>{
        localStorage.clear();
    }

    useEffect(()=>{
        const temp=localStorage.getItem("LOG");
        if(temp){
            setVal(1);
        }
    })

    return(
        <div className="header">
            <Typography variant="h4">
                <QuizIcon/>&nbsp;
                QuizMaker
            </Typography>
            {
                val?
                <Button variant="contained" href="https://quiz-maker12.herokuapp.com/logout" onClick={click} style={{"position":"relative","left":"70%"}}>Logout</Button>
                :
                <></>
            }
        </div>
    );
}

export default Header;
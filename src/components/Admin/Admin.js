import React,{useState} from "react";
import Question from "./Question/Question";
import {Button,TextField} from '@mui/material';
import * as api from '../../api/index.js';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useNavigate} from 'react-router-dom';

function Admin(){

    const [test,setTest]=useState([]);
    const [arr,setArr]=useState([0]);
    const [open,setOpen]=useState(false);
    const [name,setName]=useState();
    const [s,setS]=useState(false);
    const navigate=useNavigate();

    const clicked=(data)=>{
        console.log(data);
        setTest([...test,data]);
        setArr([...arr,0]);
    }

    const Del=(i)=>{
        setTest(test.filter((_,index)=>index!==i)); 
        setArr(arr.filter((_,index)=>index!==i));
    }

    const save=async()=>{
        setOpen(!open);
        const response=await api.addTest(test,name);
        if(response.data.message==="success"){
            setS(true);
        }
    }

    const handleClose=()=>{
        setOpen(!open);
    }

    const handleChange=(e)=>{
        setName(e.target.value);
    }

    const last=()=>{
        setS(false);
        navigate('/user');
    }

    return(
        <>
            <div>
                {arr.map((a,index)=>{
                    return(
                        <Question clicked={clicked} key={index} index={index} Del={Del} handleClose={handleClose}/>
                    )
                 })
                }
            </div>
            <div style={{"position":"relative","left":"40%"}}>
                    <Button variant="outlined" onClick={clicked}>Add Question</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="outlined" onClick={handleClose}>Save</Button>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>SAVE TEST</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Enter the name of test
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    type="text"
                    value={name}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={save}>save</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={s} onClose={last}>
                <DialogTitle>SAVE TEST</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Test has been successfully saved
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    type="text"
                    value={name}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={last}>continue</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Admin;
import React,{useState} from 'react';
import {Card, Typography,Input,TextField,IconButton} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import './Question.css';

function Question({clicked,index,Del,handleClose}){

    const [data,setData]=useState({Type:"MCQ",points:"",question:"",option1:"",option2:"",option3:"",option4:"",answer:""});

    const handleChange=(e)=>{
        e.preventDefault();
        setData({...data,[e.target.name]:e.target.value});
    }

    const submit=(e)=>{
        clicked(data);
    }

    const del=()=>{
        Del(index);
    }

    return (
        <div>
            <div className='container'>
                <Card variant='outlined' className="card">
                    <Typography variant='h6'>Question {index+1}</Typography>
                    <form noValidate autoComplete='off' onSubmit={submit}>
                        <div className='top'>
                            <Select
                                name="Type"
                                value={data.Type}
                                onChange={handleChange}
                                label="Type"
                                size="small"
                            >
                                <MenuItem value={"MCQ"}>MCQ</MenuItem>
                                <MenuItem value={"Short Text"}>Short Text</MenuItem>
                            </Select>
                            <Input type='Number' name='points' label='points' value={data.points} onChange={handleChange} placeholder=" points" style={{"width":"7%","position":"relative", "left":"47%"}}/>
                        </div>
                        <div className="que">
                            <TextField name='question' value={data.question} multiline onChange={handleChange} placeholder="Question Text" size="small" style={{"width":"70vw","position":"relative","top":"40px"}}></TextField>
                        </div>
                        {(data.Type==="MCQ")
                        ?
                        <div className='options'>
                            <ul style={{"listStyle":"none","padding":"3px"}}>
                                <li>
                                    <input type='radio' id="option1" name="answer" value={data.option1} onChange={handleChange}></input>
                                    &nbsp;&nbsp;
                                    <label htmlFor='option1'>
                                        <Input type="text" placeholder='option1' name='option1' value={data.option1} onChange={handleChange} size="small" style={{"width":"15%","height":"5%"}}></Input>
                                    </label>
                                </li>
                                <li>
                                    <input type='radio' id="option2" name="answer" value={data.option2} onChange={handleChange} ></input>
                                    &nbsp;&nbsp;
                                    <label htmlFor='option2'>
                                        <Input type="text" placeholder='option2' name="option2" value={data.option2} onChange={handleChange} size="small" style={{"width":"15%","height":"5%"}}></Input>
                                    </label>
                                </li>
                                <li>
                                    <input type='radio' id="option3" name="answer" value={data.option3} onChange={handleChange}></input>
                                    &nbsp;&nbsp;
                                    <label htmlFor='option3'>
                                        <Input type="text" placeholder='option3' name="option3" value={data.option3} onChange={handleChange} size="small" style={{"width":"15%","height":"5%"}}></Input>
                                    </label>
                                </li>
                                <li>
                                    <input type='radio' id="option4" name="answer" value={data.option4} onChange={handleChange}></input>
                                    &nbsp;&nbsp;
                                    <label htmlFor='option4'>
                                        <Input type="text" placeholder='option4' name="option4" value={data.option4} onChange={handleChange} size="small" style={{"width":"15%","height":"5%"}}></Input>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className='last'>
                            <Input label='minChar' placeholder=" min char" style={{"width":"8%"}}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input label='maxChar' placeholder=" max char" style={{"width":"8%"}}/>
                        </div>
                        }
                    </form>
                </Card> 
                <div>
                    <ul style={{"listStyle":"none","padding":"3px"}}>
                        <li>
                            <IconButton onClick={submit}><AddIcon/></IconButton>
                        </li>
                        <li>
                            <IconButton onClick={del}><DeleteIcon/></IconButton>
                        </li>
                        <li>
                            <IconButton onClick={handleClose}><SaveAltIcon/></IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;
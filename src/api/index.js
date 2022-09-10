import axios from 'axios';

const url="https://quiz-maker12.herokuapp.com";

const API=axios.create({baseURL:url});

export const addTest=(test,name)=>API.post('/addTest',{test:test,name:name});
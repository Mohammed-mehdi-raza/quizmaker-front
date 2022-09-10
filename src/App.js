import React from 'react';
import './App.css';
import{Routes,Route} from "react-router-dom";
import Home from './components/Home/Home.js';
import User from './components/User/User.js';
import Admin from './components/Admin/Admin.js';
import Student from './components/Student/Student.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {

  return (
    <div style={{"height":"100vh"}}>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/user' element={<User/>}/>
        <Route exact path='/user/student' element={<Student/>}/>
        <Route exact path='/user/admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

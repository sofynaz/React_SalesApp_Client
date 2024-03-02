import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Header';
import Salesapp from './component/salesApp';
import Addsales from './component/AddSales.js';
import Topsales from './component/Top5Sales.js';
import Todayrevenue from './component/TodaysRevenue.js';
import Login from './component/LOGIN.js';
import Register from './component/REGISTERE.js';
import  "./App.css";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




function App() {

  function DynamicRouting (){
    const dispatch =useDispatch()
    const navigate = useNavigate();
    const user = useSelector(state=>state.user);
  
    useEffect(()=>{
      const userData = JSON.parse(localStorage.getItem('user'))
      if(userData){
        dispatch({type:"LOGIN_SUCCESS",payload:userData})
      }else{
        localStorage.removeItem('token')
        navigate('/Login')
      localStorage.removeItem("user")
      dispatch({type:"LOGIN_ERROR"})
     
      }
  
    },[]) 

    return (

      <Routes>
      <Route path='/' element={<Salesapp />} />
      <Route path='/AddSales' element={<Addsales />} />
      <Route path='/TopSales' element={<Topsales />} />
      <Route path='/TodaysRevenue' element={<Todayrevenue />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      
    </Routes>

    )

  }
 
 

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <DynamicRouting/>

      </BrowserRouter>
    </div>
  );
}

export default App;

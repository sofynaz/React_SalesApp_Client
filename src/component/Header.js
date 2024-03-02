
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const user = useSelector(state=>state.user);
    const logout =(e)=>{
      e.preventDefault()
  localStorage.removeItem('token')
    localStorage.removeItem("user")
    dispatch({type:"LOGIN_ERROR"})
    navigate('/Login')
   
  }
    return (
        <div>
           <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid bg-primary">
    {localStorage.getItem("token")!=null?<NavLink className="navbar-brand text-light mx-2" to="/">SALES APP</NavLink>:''}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">   
       {localStorage.getItem("token")!=null? <NavLink className="navbar-brand text-light mx-4" to="/AddSales">ADD SALES </NavLink>: ''}
        </li> 
        <li className="nav-item">
       {localStorage.getItem("token")!=null? <NavLink className="navbar-brand text-light mx-4" to="/TopSales">TOP 5 SALES</NavLink>:''}
        </li>
        <li>
        {localStorage.getItem("token")!=null?<NavLink className="navbar-brand text-light mx-4" to="/TodaysRevenue">TODAYS TOTAL REVENUE</NavLink>:''}
        </li>
        <li>
        <NavLink className="navbar-brand text-light mx-4 " to="/Login">LOGIN</NavLink>
        </li>
        <li>
        <NavLink className="navbar-brand text-light mx-4" to="/Register">REGISTER</NavLink>
        </li>
        <li>
       {localStorage.getItem("token")!=null? <NavLink className="navbar-brand text-light mx-4" onClick={(e)=>logout(e)}>LOGOUT</NavLink>:''}
        </li>
      </ul> 
     
    </div>
  </div>
</nav> 
        </div>
          
)}
export default Navbar;
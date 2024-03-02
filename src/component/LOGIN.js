
import React from "react";
import { useState } from "react";
import { API_BASE_URL } from "../Config";
import axios from "axios";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';

function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    // loading and unloading
    const [Loading, setLoading] = useState(false)
    
    const handleLogin = async (e) => {
        e.preventDefault();
    
        // Display loading spinner
        setLoading(true);
    
        try {
            console.log(API_BASE_URL);
          const requestData = { Email:Email, Password:Password };
          const   response = await axios.post(`${API_BASE_URL}/api/auth/Login`, requestData);
          console.log(response);
        
          // Check if the registration was successful (modify this based on your API response)
          if (response.status===200) {
          
           alert('successfully Login!')
            localStorage.setItem("token",response.data.result.token)
           localStorage.setItem('user',JSON.stringify(response.data.result.user));
           Dispatch({type:'LOGIN_SUCCESS',payload:response.data.result.user})
           setLoading(false);
           navigate('/');
          }
         
          setEmail('')
          setPassword('')
        } catch (error) {
          console.log(error);
          // Display error message
          alert('User not Loged In!')
        } finally {
          // Hide loading spinner
          setLoading(false);
        }
      };
    

    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-6 mx-md-auto">
                    {Loading ? <div className="spinner-border text-primary mx-5 p-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : ""}
                        <h3 className="text-center text-primary ms-5" >Login Form</h3>
                        <form  onSubmit={(e)=>handleLogin(e)}>
                            <label for="exampleInputEmail1" className="form-label ms-5 my-2 fs-5">E-mail </label>
                            <input type="email" value={Email} onChange={(ee)=>setEmail(ee.target.value)} className="form-control ms-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label for="exampleInputPassword1" className="form-label ms-5 my-2 fs-5">Password</label>
                            <input type="password"value={Password} onChange={(ee)=>setPassword(ee.target.value)} className="form-control ms-5" id="exampleInputPassword1" />
                            <button type="submit" className="btn btn-primary mx-5 my-5  container-fluid">Submit</button>
                        </form>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Login;
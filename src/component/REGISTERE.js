
import React, { useState } from "react";
import { API_BASE_URL } from "../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
  const [FullName, setFullName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate()
  // loading and unloading
  const [Loading, setLoading] = useState(false)
  
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(API_BASE_URL);
    // Display loading spinner
    setLoading(true);

    try {
      console.log(API_BASE_URL);
      const requestData = { FullName: FullName, LastName: LastName, Email: Email, Password: Password };
      const response = await axios.post(`${API_BASE_URL}/api/auth/Register`, requestData);
      console.log(response);
      // Check if the registration was successful (modify this based on your API response)
      if (response.status === 201) {
        // Display success message

        alert('successfully Register!')
        navigate('/login')
      }

      else {
        // Display error message
        alert('Registration failed')
      }
      setFullName('');
      setLastName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error(error);
      // Display error message
      alert('User not registered')
    } finally {
      // Hide loading spinner
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-sm-6 mx-auto overflow-x-auto ">
            {Loading ? <div className="spinner-border  text-primary mx-5 p-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> : ""}

            <form onSubmit={(e) => handleRegister(e)}>

              <h3 className="text-center mb-5 text-primary" >Registration Form</h3>
              <label className="ms-md-5">First Name</label>
              <input type="text" value={FullName} onChange={(ev) => setFullName(ev.target.value)} className="form-control ms-md-5 my-2 " placeholder="" />
              <label className="ms-md-5" >Last Name</label>
              <input type="text" value={LastName} onChange={(ev) => setLastName(ev.target.value)} className="form-control ms-md-5 my-2" placeholder="" />
              <label for="exampleInputEmail1" className="form-label ms-md-5 ">E-mail </label>
              <input type="email" value={Email} onChange={(ev) => setEmail(ev.target.value)} className="form-control ms-md-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <label for="exampleInputPassword1" className="form-label ms-md-5 my-2">Password</label>
              <input type="password" value={Password} onChange={(ev) => setPassword(ev.target.value)} className="form-control ms-md-5 " id="exampleInputPassword1" />
              <button type="submit" className="btn btn-primary mx-md-5 my-4 container-fluid" typeof="submit" >Submit</button>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}
export default Register;
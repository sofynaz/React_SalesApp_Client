
import React from "react";
import  axios  from "axios";
import { API_BASE_URL } from "../Config";
import { useState,useEffect } from "react";

  function  Todayrevenue() {
    
    const [revenue,setrevenue] =useState('')
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        }
    
      }

  const Revenue = async()=>{
    try {
        
        const response = await axios.get(`${API_BASE_URL}/api/todaysRevenue`,config);
        console.log(response);
        setrevenue(response.data.totalRevenue)
        


    } catch (error) {
        console.log(error);
    }
  }
    useEffect(()=>{
   Revenue()
    },[])

    return (
        <>
            <div className="container-fluid text-center mt-5">
                <div className="row">
                    <div className="col-sm-12 text-primary p-5">
                        <h2>
                            TODAY'S REVENUE IS {revenue}
                        </h2>
                    </div>
                </div>
                
            </div>

        </>
    )
}
export default Todayrevenue;
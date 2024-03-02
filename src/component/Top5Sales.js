
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_BASE_URL } from "../Config";


function Topsales() {
  const [saleId, setSaleId] = useState([])
  const [Product, setProduct] = useState([])
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    }

  }

  const TopfiveSale = async () => {
    try {
      // Replace API_BASE_URL with your actual API base URL
      const response = await axios.get(`${API_BASE_URL}/api/topFiveSale`, config);
      setSaleId(response.data.topFiveSale
      ); // Assuming the response is an array of sales data

    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  }
  console.log(saleId)
  useEffect(() => {
    TopfiveSale()
  }, [])




  return (

    <div className="container-fluid mt-5 text-center">
      <div className="row ">
        <div className="col-md-10  mx-auto overflow-x-auto">
          <table className="table ">
            <thead className="mainHeading">
              <tr className="item-1 ">
                <th scope="col" className="text-primary fs-md-5 " >#</th>
                <th scope="col" className="text-primary fs-md-5" >Sales Id:</th>
                <th scope="col" className="text-primary fs-md-5" >Product Name</th>
                <th scope="col" className="text-primary fs-md-5" >Quantity</th>
                <th scope="col" className="text-primary fs-md-5" >Sale Amount</th>
              </tr>
            </thead>

            <tbody>
              {saleId.map((p,index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td className="p-md-2 ">{p._id}</td>
                    <td className="p-md-2">{p.ProductName}</td>
                    <td className="p-md-2">{p.Quantity}</td>
                    <td className="p-md-2">{p.Amount}</td>
                  </tr>
                )
              })}


            </tbody>
          </table>

        </div>
      </div>
    </div>

  )
}


export default Topsales;
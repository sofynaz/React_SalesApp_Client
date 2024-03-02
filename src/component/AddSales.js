import axios from 'axios';
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../Config";

function Addsales() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  // const [Items, setItems] = useState([])
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    }

  }



  const addDetails = async (e) => {
    e.preventDefault();
    try {
      const requestData = { ProductName: productName, Quantity: quantity, Amount: amount };
      const response = await axios.post(`${API_BASE_URL}/api/addSale`, requestData, config);
      console.log(response.data);

      setProductName(response.data.ProductName);
      setQuantity(response.data.Quantity);
      setAmount(response.data.Amount);
      alert('Added Data Successfully!')
      setProductName('');
      setQuantity('');
      setAmount('');
    } catch (error) {
      console.error("Error adding sale", error);

    }
    const handleErrors = (error) => {
      console.error('Error:', error);

      // Provide a user-friendly error message
      alert('An error occurred while adding the sale. Please try again later.');
    };

  };

  useEffect(() => {
    // You can add any initial data fetching logic here if needed
  }, []);



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mx-auto">
          <h2 className="text-center text-primary my-5">ADD SALE ENTRY</h2>
          <form onSubmit={(e) => addDetails(e)}>
            <h6 className="ms-md-5 fs-5">Product Name</h6>
            <input
              type="text"
              value={productName}
              onChange={(ev) => setProductName(ev.target.value)}
              className="form-control mx-md-5 mb-3"
              id="productNameInput"
            />
            <h6 className="ms-md-5 fs-5">Quantity</h6>
            <input
              type="text"
              value={quantity}
              onChange={(ev) => setQuantity(ev.target.value)}
              className="form-control mx-md-5 mb-3"
              id="quantityInput"
            />
            <h6 className="ms-md-5 fs-5">Amount</h6>
            <input
              type="text"
              value={amount}
              onChange={(ev) => setAmount(ev.target.value)}
              className="form-control mx-md-5 mb-3"
              id="amountInput"
            />
            <button type="submit" className="btn btn-primary mx-md-5 mt-3 container-fluid">
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Addsales;

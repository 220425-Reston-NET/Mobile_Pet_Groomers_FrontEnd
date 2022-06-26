import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./SearchGroomers.css";

function SearchGroomers() {
  
  const navigate = useNavigate();
  const goToNewCustInfo = () => {
      navigate('/appointments');
  }
  return (
    <form className="row g-3">
  <div>
      <h1>Customer Information Form</h1>
  </div>
  
  <div>
      <h2>Please Enter Your Infomation Below  </h2>
  </div>
  <br></br>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">First Name:</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Last Name:</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address:</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Breed of Pet:</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Husky" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">City:</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">State:</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-12">
  <button type="submit" className="btn btn-primary"><div onClick={goToNewCustInfo}>Submit</div></button>
  </div>
</form>
  )
}

export default SearchGroomers
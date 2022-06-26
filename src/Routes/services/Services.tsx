import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Services.css";

function Services() {
    
    const navigate = useNavigate();
    const goToNewCustInfo = () => {
        navigate('/Searchgroomers');
    }
  
    return (
    <>
  <div>
      <h1>Customer Information Form</h1>
  </div>
  <div>
      <h2>Please Enter Your Infomation Below :) </h2>
  </div>
  
  <div className="container px-5 my-5">
    <form id="contactForm" data-sb-form-api-token="59b8e2ee-bafd-4ae1-ad7a-f3f2ea06f0f3">
        <div className="mb-3">
            <label className="form-label d-block">Select Service</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" id="haircut4000" type="radio" name="newField" data-sb-validations="" />
                <label className="form-check-label" htmlFor="haircut4000">Haircut $40.00</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" id="wash4500" type="radio" name="newField" data-sb-validations="" />
                <label className="form-check-label" htmlFor="wash4500">Wash : $45.00</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" id="washAndCut8000" type="radio" name="newField" data-sb-validations="" />
                <label className="form-check-label" htmlFor="washAndCut8000">Wash and Cut : $80.00</label>
            </div>
        </div>
        <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
            </div>
        </div>
        <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary"><div onClick={goToNewCustInfo}>Submit</div></button>
        </div>
    </form>
</div>
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </>
  )
}

export default Services
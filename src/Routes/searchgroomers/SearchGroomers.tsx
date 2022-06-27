import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppointmentformModels} from '../../Models/searchgroomers'
import "./SearchGroomers.css";

function CreateAppointmentForm() {
    
  let CustDefault:AppointmentformModels = { 
  
    firstname : '',
    lastname : '',
    address : '',
    breed : '',
    city : '',
    state :  '',

  };

  
  const [custOBJ, setcusOBJ] = useState(CustDefault);
  const [customer, setcustomer] = useState({} as AppointmentformModels);
  

  function insertFirstName(e: any) {
      CustDefault.firstname = e.target.value;
  }
  function insertLastName(e: any) {
      CustDefault.lastname = e.target.value;
  }
  function insertAddress(e: any) {
      CustDefault.address = e.target.value;
  }
  function insertBreed(e: any) {
      CustDefault.breed = e.target.value;
  }
  function insertCity(e: any) {
      CustDefault.city = e.target.value;
  }
  function insertState(e: any) {
      CustDefault.state = e.target.value;
  }
  
   function onSubmit(e: any) {
      e.preventDefault();
      
       fetch("http://mobilepetgroomersapi-env.eba-irrbazjk.us-east-1.elasticbeanstalk.com/api/Appointment/AddAppointment", {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
              {
                  firstname: custOBJ.firstname,
                  lastname: custOBJ.lastname,
                  breed: custOBJ.breed,
                  address: custOBJ.address,
                  city: custOBJ.city,
                  state: custOBJ.state,
              }
              )
          
          }).then(response => response.json())
              .then((customer: AppointmentformModels) => {
          
              console.log(customer);    
            
              setcusOBJ((prev) => customer);
              goToNewCustInfo();

      });
  };
          
      
      const navigate = useNavigate();
      const goToNewCustInfo = () => {
          navigate('/appointments');
      };
      


  return (
    <form className="row g-3">
  <div>
      <h1>Customer Appoinment Form</h1>
  </div>
  <div>
      <h2>Please Enter Your Infomation Below </h2>
  </div>
  <br></br>
  <div className="col-md-6">
    <label htmlFor="inputFirstname" className="form-label">First Name:</label>
    <input type="text" className="form-control" id="inputFirstName" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputLastname" className="form-label">Last Name:</label>
    <input type="text" className="form-control" id="inputLastName" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address:</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Ex: 1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputBreedofPet" className="form-label">Breed of Pet:</label>
    <input type="text" className="form-control" id="inputBreed" placeholder=" Ex: Husky" />
  </div>
  <div className="col-12">
    <label htmlFor="inputCity" className="form-label">City:</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Ex: Brooklyn" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputState" className="form-label">State:</label>
    <input type="text" className="form-control" id="inputState" placeholder="Ex: New York" />
  </div>
  <div className="col-12">
  <button type="submit" className="btn btn-primary"><div>Submit</div></button>
  </div>
</form>
  )
}

export default CreateAppointmentForm;
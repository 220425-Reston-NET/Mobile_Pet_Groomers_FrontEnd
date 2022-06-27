import React from 'react'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'sassy-datepicker';
import "./Appointments.css"


function Appointments() {
  const onChange = (date : any) => {
    console.log(date.toString());  
  };
  
  const navigate = useNavigate();
  const goToNewCustInfo = () => {
      navigate('/confirmedpage');
  }
  return (
    <>
  <div>
  <h1>Appointments</h1>
  <h2>Please Select the Date of your Appoinment </h2>
  </div>
  <DatePicker onChange={onChange} />
  <button type="submit" className="btn btn-primary"><div onClick={goToNewCustInfo}>Submit</div></button>
  
  </>

  );
}
export default Appointments
import React from 'react'
// import "./Appointment.css";
import DatePicker from 'sassy-datepicker';


function Appointments() {
  const onChange = (date : any) => {
    console.log(date.toString());
  };

  return (
  <>
  <h1>Appointments</h1>
  <DatePicker onChange={onChange} />
  </>

  );
}
export default Appointments
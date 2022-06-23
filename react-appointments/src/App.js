import React , {useEffect, useState} from "react";
import './App.css';


function App() {

    const [appointments, setAppointment] = useState([
        {
        appID: 0,
        custName: "",
        custNumber: 0
        }
    ])

    useEffect(() => {

        fetch("http://mobilepetgroomersapi-env.eba-irrbazjk.us-east-1.elasticbeanstalk.com/api/Appointments/GetAllAppointments")
            .then(response => response.json())
            .then(appointments => {
                setAppointment((previousData) => appointments)
            });
    }, [])

  return (
    <div className="App">
        <ul>
            {appointments.map(appointment => <li>{appointment.name}</li>)}
        </ul>
    </div>

    );
}

export default App;
import { useState } from 'react';
import React, { useEffect, } from 'react'
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../Models/register'
import './register.css'


function CreateCustomer() {
    

    let CustDefault:Customer = { 
    
    name : '',
    password : '',
    firstname : '',
    lastname : '',
    address : '',
    city : '',
    state :  '',

    };

    
    const [custOBJ, setcusOBJ] = useState(CustDefault);
    const [customer, setcustomer] = useState({} as Customer);
    

    function insertName(e: any) {
        CustDefault.name = e.target.value;  
    }
    function insertPassword(e: any) {
        CustDefault.password = e.target.value;
    }
    function insertFirstName(e: any) {
        CustDefault.firstname = e.target.value;
    }
    function insertLastName(e: any) {
        CustDefault.lastname = e.target.value;
    }
    function insertAddress(e: any) {
        CustDefault.address = e.target.value;
    }
    function insertCity(e: any) {
        CustDefault.city = e.target.value;
    }
    function insertState(e: any) {
        CustDefault.state = e.target.value;
    }
    
     function onSubmit(e: any) {
        e.preventDefault();
        
         fetch("http://mobilepetgroomersapi-env.eba-irrbazjk.us-east-1.elasticbeanstalk.com/api/Customer/AddCustomer", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: custOBJ.name,
                    password: custOBJ.password,
                    firstname: custOBJ.firstname,
                    lastname: custOBJ.lastname,
                    address: custOBJ.address,
                    city: custOBJ.city,
                    state: custOBJ.state,
                }
                )
            
            }).then(response => response.json())
                .then((customer:Customer) => {
            
                console.log(customer);    
              
                setcusOBJ((prev) => customer);
                goToNewCustInfo();

        });
    };
            
        
        const navigate = useNavigate();
        const goToNewCustInfo = () => {
            navigate('/services');
        };
        

        
        return (
        <>
        
        <form className='createcustomer-container' onSubmit={onSubmit}>
            
            <div className="form-group col-md-4 ">
                <label htmlFor="inputName">Name</label>
                <div>
                    <input type="text" className="form-control" id="inputName" placeholder="John Doe" onChange={insertName} />
                </div>
            </div>
            
            <div className="form-group col-md-4 ">
                <label htmlFor="inputPhoneNumber">Password</label>
                <div>
                    <input type="text" className="form-control" id="inputPassword" placeholder="1234567890" onChange={insertPassword} />
                </div>
            </div>
            
            <div className="form-group col-md-4">
                <label htmlFor="inputAddress">FirstName</label>
                <input type="text" className="form-control" id="inputFirstName" placeholder="1234 Main St" onChange={insertFirstName} />
            </div>

            <div className="form-group col-md-4">
                <label htmlFor="inputID">Lastname</label>
                <div>
                    <input type="text" className="form-control" id="inputLastName" placeholder="1" onChange={insertLastName} />
                </div>
                
                <label htmlFor="inputConfirmID">Address</label>
                <div>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1" onChange={insertAddress} />
                </div>

                <label htmlFor="inputConfirmID">City</label>
                <div>
                    <input type="text" className="form-control" id="inputCity" placeholder="1" onChange={insertCity} />
                </div>

                <label htmlFor="inputConfirmID">State</label>
                <div>
                    <input type="text" className="form-control" id="inputState" placeholder="1" onChange={insertState} />
                </div>
                
                
                
                <div className="col-12 createcustomer-container">
                    <button type="submit" className="btn btn-primary"><div>Create Account</div></button>
                </div>
            </div>
        </form>
        </>
    )
}

export default CreateCustomer
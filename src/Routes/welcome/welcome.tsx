import React, { useEffect, useState } from 'react'
import './welcome.css'
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../Models/register';
import { isArrowFunction } from 'typescript';

function Welcome(){

    const navigate = useNavigate();

    let userName : any = '';
    let userPassword: any = '';

    const goToChooseAccount = () =>
    {
        navigate('/services')
    };

    const gotToCreateAccount = () => {
        // This will navigate to first component
        navigate('/register'); 
    };                         
    
 
        // make a function if loging info matches are user in db = welcome page else
        // user not found message display.
        const [users, setUser] = useState({} as Customer);
        const [isfailed, setfailed] = useState(false);
    
    
        function GetCustomerCard(e: any) {
          userName = e.target.value;
          console.log(userName);
        }
      
        function GetCustomerPin(e: any) {
          userPassword = e.target.value;
          console.log(userPassword);
        }
      
        async function onSubmit(e: any) {
          e.preventDefault();
      
          await fetch(
            "http://mobilepetgroomersapi-env.eba-irrbazjk.us-east-1.elasticbeanstalk.com/api/Customer/SearchCustomerByName?" + new URLSearchParams({
                custName: userName,
                custPassword: userPassword
              })
            
          )
            .then((response) => response.json())
              .then((response => {
              // change/ attached user to user id in db
              setUser(response);

              console.log(response);
              goToChooseAccount();
              setfailed((prev) => false);
            }), () => {

                setfailed((prev) => true);
            }
            
            );
        }//end of onSubmit

     
    return (
        <form className="welcome-container" onSubmit={onSubmit}>
            <div className="input-container">
            <label htmlFor="inputCardNumber" className='topmarg'><h2><b>Login</b></h2></label>
                <div style ={{marginTop:'-3rem'}}>
                <label htmlFor="loginlabel" className='topmarg'>User Name</label>
                <input type="text" className="form-control" id="inputCardNumber" placeholder="" required onChange={GetCustomerCard} style ={{marginTop:'0rem'}}/>
                </div>
                <div style ={{marginTop:'-3rem'}}>
                <label htmlFor="inputPIN" className='topmarg'>Password</label>
                <input type="password" className="form-control" id="inputPIN" placeholder="" required onChange={GetCustomerPin} style ={{marginTop:'0rem'}}/>
                {
                  isfailed && <span style={{color : 'red'}}>User was not found</span>
                }
                </div>
                <div>
                <button type="submit" className="btn btn-primary topmarg" style ={{marginTop:'0rem'}}>
                <div>Sign In</div>
                </button>
                </div>            
            </div>   
          
            <div className='create-container'style ={{marginTop:'-17rem'}}>
                <label htmlFor="buttonlabel" className='topmarg'><h2><b>No Account?</b></h2></label>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary"style ={{marginTop:'-1rem'}}>
                <div onClick={gotToCreateAccount}>Create</div>
                </button>
            </div>
        </form>
    )//end of return
    
}
export default Welcome
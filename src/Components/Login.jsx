
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css';

  const Login = () => {
   



    const [values, setValues] = useState({
      
      email: "",
      password: "",
     
    });
  
    const [focused, setFocused] = useState({
      
      email: false,
      password: false,
      confirmPassword: false,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const handleFocus = (e) => {
      const { name } = e.target;
      setFocused({ ...focused, [name]: true });
    };
  
    const inputs = [
      
       
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Enter  a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      }
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Your form submission logic here
    };

  
    return (
      <div className="SignUp-1">
        <form onSubmit={handleSubmit} >
          <h1>Welcome to Cloudxcel <br />Login</h1>
          {inputs.map((input) => (
            <div key={input.id} className="SignUpper-1">
              <label className="label-1">{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                value={values[input.name]}
                onChange={handleChange}
                onBlur={handleFocus}
                pattern={input.pattern}
                required={input.required}
                // onChange={(event)=>setInputs(event.target.value)} 
              />
              {focused[input.name] && <span className="span-1">{input.errorMessage}</span>}
            </div>
          ))}
          <button id="submit"   type="submit"   >Login</button>
          <div className="redirect-1">
         Forgot Password ?<Link to="/resetPassword">Click here!</Link>
          </div>
        </form>
      </div>
    );
};

export default Login;
import React, { useState } from "react";
import './ResetPassword.css'
const ResetPassword = () => {



    const [values, setValues] = useState({
      
        email: "",
        setpassword: "",
        setconfirmPassword: "",
      });
    
      const [focused, setFocused] = useState({
        
        email: false,
        setpassword: false,
        setconfirmPassword: false,
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
          errorMessage: "Enter a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 2,
          name: "set-password",
          type: "password",
          placeholder: "Set-Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        }
        ,
        {
          id: 3,
          
            name: "set-confirmPassword",
            type: "password",
            placeholder: "set-Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
          }
      ];


      const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
      };

  return (
    
   
        <div className="resetpassword">
          <form onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            {inputs.map((input) => (
              <div key={input.id} className="SignUpper-rp">
                <label className="label-rp">{input.label}</label>
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={values[input.name]}
                  onChange={handleChange}
                  onBlur={handleFocus}
                  pattern={input.pattern}
                  required={input.required}
                />
                {focused[input.name] && 
                <span className="span-rp">{input.errorMessage}</span>}
              </div>
            ))}
            <button type="submit">reset password</button>
           
          </form>
        </div>
    
  )
}

export default ResetPassword
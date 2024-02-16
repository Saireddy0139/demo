import React, { useState } from "react";
import "./forminputs.css";
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [focused, setFocused] = useState({
    username: false,
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
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "it should be 3-20 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[a-zA-Z][A-Za-z0-9-_]{3,20}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-24 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,24}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here

  };


  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Cloudxcel <br />Register</h1>
        {inputs.map((input) => (
          <div key={input.id} className="SignUpper">
            <label className="label">{input.label}</label>
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
            {focused[input.name] && <span>{input.errorMessage}</span>}
          </div>
        ))}
        <div className="button">
        <button id="submit"  type="submit" >Sign Up</button>
        </div>
        <div className="redirect">
        Already Registered? <Link to="/login">Login here!</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

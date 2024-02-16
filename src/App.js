import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,
   Routes, 
   Route,
   Navigate
   } from 'react-router-dom'; 

import SignUp from './Components/SignUp';
import Login from './Components/Login';
 import ResetPassword from './Components/ResetPassword';


 
function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={<SignUp />} />
                  <Route
                      path="/login"
                      element={<Login />} />
                  { <Route
                      path="/resetPassword"
                      element={<ResetPassword />} /> }

                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
          </Router>
      </>
  );
}

export default App;
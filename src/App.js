// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,
   Routes, 
   Route,
   Navigate
   } from 'react-router-dom'; 
//    import "@aws-amplify/ui-react/styles.css";
// import {
// withAuthenticator,
// Button,
// Heading,
// Image,
// View,
// Card,
// } from "@aws-amplify/ui-react"
import SignUp from './Components/SignUp';
import Login from './Components/Login';
 import ResetPassword from './Components/ResetPassword';


 
// function App({ signOut }) {
  function App() {
  return (
      <>
      {/* <View className="App">
        <Card> */}
         
          
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
          {/* <Heading level={1}></Heading>
          </Card>
          {/* <Button onClick={signOut}>Logout</Button> */}
          {/* </View>  */}
          </>
  );
}
export default App;
// export default withAuthenticator(App);
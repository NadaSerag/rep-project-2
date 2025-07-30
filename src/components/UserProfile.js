import { useState } from 'react';
import loginPic from '../profile-pics/log-in-pic.jpeg';
import defaultPic from '../profile-pics/default-profile-pic.jpg';
import CustomForm from './CustomForm';
 import { validation3 } from "../components/YupFormValidation";
import "../styles/user-profile.css";

function UserProfile(){
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ imgPath, setImgPath ] = useState(defaultPic);
  const [ showForm, setShowForm ] = useState(false);

  const [ username, setUsername ] = useState(null);
  const [ email, setEmail] = useState(null);
  const [ error, setError] = useState(null);

 // let formSuccess = false;


  //FORM PROPS
  const fields = [
    { name: 'username', placeholder: 'Enter username', type: "text" },
    { name: 'password', placeholder: 'Enter password', type: 'text' },
  ];

  const handleSubmit = async(user) => {
    try{
     const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
            username: 'emilys',
           password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      }),
     // credentials: 'include' // Include cookies (e.g., accessToken) in the request 
     //The LINE ABOVE CAUSED THE ERROR:
//Access to fetch at 'https://dummyjson.com/auth/login' from origin 'http://localhost:3000' has been blocked by CORS policy: 
// Response to preflight request doesn't pass access control check: 
// The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. 
// POST https://dummyjson.com/auth/login net::ERR_FAILED

    });
     if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsername(data.username);
      setEmail(data.email);
      //store user in localStorage?
      console.log("Log In Succeeded");
      setError(null);
      setShowForm(false);

    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
     console.log(error);
    }
  }

  function handleLogIn(){
    setShowForm(true);
    setLoggedIn(true);
    setImgPath(loginPic);
  }

  function handleLogOut(){
    setLoggedIn(false);
    setImgPath(defaultPic);
    setShowForm(false);
  }

  return(
    <div className = "user-profile">

       <img src= { imgPath } 
        alt="Profile"
        style={{ width: 100, height: 100, borderRadius: '50%' }}
      />
      {username && <p> {username} </p>}
      {email && <p>{email} </p>}
      {/* {error ? <p>{error}</p> : <p>SUCCESS!</p>} */}
    <button onClick={isLoggedIn ? handleLogOut: handleLogIn} className= {isLoggedIn ? "logout-btn" : "logout-btn"}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    {showForm &&  <CustomForm
       fields={fields}
       onSubmit={ handleSubmit }
       buttonLabel={"LOG IN"}
       validationFile = { validation3 }/>}
       
    </div>
  );
}

export default UserProfile;
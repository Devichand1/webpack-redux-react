import { Avatar, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './../assests/home.css'
import { useHistory } from "react-router-dom";

const Home = () => {
  const user = window.localStorage.getItem("data");
  let history = useHistory();

 if(user ==null){
  history.push("/login")
 }

  const signout=()=>{
    window.localStorage.clear();
    history.push("/login")
   
  }
    // const username = JSON.parse(user).user_name;
  return (
    <div className="home" >
    <div className="home-container" >
   <div>  <Avatar/> <Button variant="outlined" color="secondary" onClick={signout} >Logout</Button> </div>
    <h3>welcome back username</h3>
    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint </p>
   
    </div>
    </div>
  );
};

export default Home;
import { Button, Input } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Router } from 'react-router'
import { login } from '../redux/auth/Actions'
import css from './../assests/login.css'
import { useHistory } from "react-router-dom";
const Login = () => {
    
     const [user_name, setuser_name] = useState()
     const [password, setpassword] = useState()
    //  const auth = useSelector(state => state.authenticate);
     const data = localStorage.getItem("data")
     let history = useHistory();
    // useEffect(() => {
    //     if(data != undefined ) {
    //         return history.push("/home")
    //  }
    // })


 const dispatch = useDispatch()
     const handlesubmit=()=>{
         const data={user_name, password}
        
          dispatch(login(data))
          history.push("/")
     }
 
    return (
        <div className="login-body"  >
            <div className="login-container"  >
             <center className="login-header" >Login to Hola</center>  
             <li> 
              <Input 
             placeholder="Enter Username.."
             value={user_name}
             type="text"
             onChange={(e)=>setuser_name(e.target.value)}
              /></li> 
               <li>
               <Input
                   placeholder="Enter Password.."
                   value={password}

                   onChange={(e, t)=>setpassword(e.target.value)}
               /></li> 
              <li> <Button
              onClick={handlesubmit}
              >Login</Button></li> 
            </div>
        </div>
    )
}

export default Login

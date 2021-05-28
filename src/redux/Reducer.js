"use strict";
import { LoginConstant } from "./auth/Constant";


const INITIAL_STATE = {

  data: "",
  
};
console.log(INITIAL_STATE)
  


const LoginReducer = (state = INITIAL_STATE, action) => {
    console.log(action )
  switch (action.type) {
       case LoginConstant.LOGIN_SUCCESS: {
      const userData = action.payload.user;
      localStorage.setItem('data', JSON.stringify(userData))
    //   sessionStorage.setItem('data', 'user')
      console.log(userData)
      return { ...state, 
        data: userData.user_name };
    }
   
}
}

export default LoginReducer;
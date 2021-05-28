"use strict";
import { LoginConstant } from "./Constant";

export const login=(user)=>{


    return (dispatch) =>{
        dispatch({type: LoginConstant.LOGIN_REQUEST})
        // localStorage.setItem('data',"data")
            dispatch({
                type: LoginConstant.LOGIN_SUCCESS,
                payload:{ user :user}
            })
    
     }
}
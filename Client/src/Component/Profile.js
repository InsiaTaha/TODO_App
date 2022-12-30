import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate} from "react-router-dom";
import {LOGOUT} from '../Features/user';
import Todo from './Todo'
import './Style.css'

export default function Profile(){
    const isLoggedin= useSelector((state)=>state.user.isLogged)
    const currentUser= useSelector((state)=>state.user.currentUser)
    const dispatch=useDispatch();
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(isLoggedin)
        if(!isLoggedin)
        {
            
            navigate("/Login")
        }
    })
    const handleLogout=()=>{
        dispatch(LOGOUT())
    }
    const showData=()=>{
        if(isLoggedin)
        {
         console.log(currentUser)
            return(
                <>
                <nav className="navbar navbar-dark navbar-expand-md" id="app-navbar">
                    <div className="container-fluid">
                        <i className="fa fa-life-ring">
                        <span>User Name:{currentUser.UName}</span>
                        </i>
                        <i className="fa fa-life-ring">
                        <span>Welcome! {currentUser.FName} {currentUser.LName}</span>
                        </i>
                        <button onClick={handleLogout}>Logout</button>
                        </div>
                        </nav>
                <Todo/>
               </>
               )

        }
        
    }
    
    return(
     <>
     {showData()}
    </>
    )
}
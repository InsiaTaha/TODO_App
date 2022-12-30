import './Style.css'
import { useState,useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux"
import {login,ADD_USER,getUser} from '../Features/user'
import { Link,useNavigate} from "react-router-dom";
import userIcon from '../Images/user.png'

export default function Login(){
    const user = useSelector((state)=>state.user.value)
    const isLoggedin= useSelector((state)=>state.user.isLogged)
    const [FName,setFName]=useState("");
    const [LName,setLName]=useState("");
    const [UName,setUName]=useState("");
    const [Password,setPassword]=useState("");
    const dispatch= useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
        console.log(isLoggedin)
        if(isLoggedin)
        {
            
            navigate("/")
        }
    })

    const handleClick=(e)=>{
        e.preventDefault();
         dispatch(getUser({UName,Password}))
    }
    return(
        <div className="loginBox"> 
        <img className="user" src={userIcon}height="100px" width="100px"/>
        <h3>Sign-In</h3>
        <form>
            <div className="inputBox"> 
            <input 
            id="uname" 
            type="text" 
            name="Username" 
            value={UName}
            onChange={(e)=>setUName(e.target.value)} 
            placeholder="Username"/> 
            <input 
            id="pass" 
            type="password" 
            name="Password" 
            placeholder="Password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}/>
             </div> 
             <input onClick={handleClick} type="submit" name="" value="Login"/>
             {/* <button onClick={handleClick}>Login</button> */}
        </form> 
        <div className="text-center">
            <p><Link className="LinkTxt" to="/Signup">Sign-up</Link></p>
        </div>
        </div>
    );
}
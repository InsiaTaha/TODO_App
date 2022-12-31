import { useState } from "react"
import { ADD_USER,addUserAsync } from "../Features/user";
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import './Style.css'

export default function Signup(){
const [FName,setFName]=useState("");
const [LName,setLName]=useState("");
const [UName,setUName]=useState("");
const [Password,setPassword]=useState("");
const dispatch=useDispatch()

const handleChange=(e)=>{
    e.preventDefault();
    dispatch(addUserAsync({FName,LName,UName,Password,TodoList:[]}))
      

}

    return(
        <div className="loginBox"> 
        <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
        <h3>Sign-up Here</h3>
        <form>
            <div className="inputBox"> 
            <input 
            id="fname" 
            type="text"
            placeholder="First Name"
             name="FName"
             value={FName}
             onChange={(e)=>setFName(e.target.value)}
             />
             <input 
             type="text"
             placeholder="Last Name"
             name="LName"
             value={LName}
             onChange={(e)=>setLName(e.target.value)}
             />
             <input 
             type="text"
             placeholder="User Name"
             name="UName"
             value={UName}
             onChange={(e)=>setUName(e.target.value)}
             />
             <input 
             type="password"
             placeholder="Password"
             name="Password"
             value={Password}
             onChange={(e)=>setPassword(e.target.value)}
             />
             </div>
             <input onClick={handleChange} type="submit" name="" value="Sign up"/>
             <div className="text-center">
                <p><Link className="LinkTxt" to="/Login">Login</Link></p>
             </div>
        </form>
    </div>
    )
}
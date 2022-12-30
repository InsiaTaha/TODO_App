import './App.css';
import Login from './Component/Login';
import Profile from './Component/Profile';
import Signup from './Component/Signup';
import { BrowserRouter , Routes, Route,Link, useNavigate, Router } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route index element={<Profile/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Login" element={<Login/>}/>
     
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

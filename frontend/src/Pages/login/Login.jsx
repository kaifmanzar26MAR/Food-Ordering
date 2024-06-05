import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({ email: "", password: "" })

  const [registerData, setRegisterData] = useState({ email: "", username: "", fullname: "", password: "" })
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginData)
    try {
      const res = await axios.post("http://localhost:5000/api/v1/users/loginuser",
        loginData
        , {
          withCredentials: true,
        });

      if (!res) throw new Error("error in login!!")
      console.log(res.data.data)
      toast.success("user login")
      navigate('/');
    } catch (error) {
      toast.error("Somethis went worng!")
      console.log(error);
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(registerData)
    try {
      const res = await axios.post("http://localhost:5000/api/v1/users/registeruser",
        registerData
        , {
          withCredentials: true,
        });

      if (!res) throw new Error("error in register!!")
      console.log(res.data.data)
      toast.success("user register! please login")
    } catch (error) {
      toast.error("Somethis went worng!")
      console.log(error);
    }
  }

  const getCurrentUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/users/current-user", {
        withCredentials: true,
      });

      if (!res) throw new Error("error in getting curret user!!")
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  const container = document.getElementById("container");

  useEffect(() => {
    getCurrentUser();
  }, [])
  const togglePanel = () => {
    console.log("clicked");
    setIsRightPanelActive(!isRightPanelActive);
  };
  return (
    <div className='body'>
        <div style={{display:"fixed", top:"20px", padding:"5px", backgroundColor:"#512da8", color:"white", borderRadius:"5px", margin:"10px", cursor:"pointer"}} onClick={()=>navigate('/')}>Home</div>
        <div class={`login-container ${isRightPanelActive?'active':''} `} id="container">
        <div class="form-container sign-up">
            <form onSubmit={handleRegister}>
                <h1>Create Account</h1>
            
                <span>or use your email for registeration</span>
                <input type="text" placeholder="Name" value={registerData.fullname} onChange={e=>{setRegisterData({...registerData, fullname:e.target.value})}}/>
                <input type="email" placeholder="Email" value={registerData.email} onChange={e=>{setRegisterData({...registerData, email:e.target.value})}}/>
                <input type="username" placeholder="UserName" value={registerData.username} onChange={e=>{setRegisterData({...registerData, username:e.target.value})}}/>
                <input type="password" placeholder="Password"  value={registerData.password} onChange={e=>{setRegisterData({...registerData, password:e.target.value})}}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" value={loginData.email} onChange={e=>{setloginData({...loginData, email:e.target.value})}}/>
                <input type="password" placeholder="Password" value={loginData.password} onChange={e=>{setloginData({...loginData, password:e.target.value})}}/>
                <a href="#">Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login" onClick={togglePanel}>Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Welcome!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button class="hidden" id="register" onClick={togglePanel}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>


  )
}

export default Login

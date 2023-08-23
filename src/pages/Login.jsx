import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import LoginButton from "../components/LoginButton";
import { gapi } from "gapi-script";
import { makeUser } from "../constants/cosntants";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { userLogin } from "../constants/cosntants";


const Login = ()=>{
  if (localStorage.getItem("loggedIn") === 'true'){
      // const navigateTo = useNavigate();
      // navigateTo("/")
      return (<Navigate to={"/"}/>)
  }
    const clientId = "706892910099-hf7fogsfftmeag62r4nhfuifcn8h0nld.apps.googleusercontent.com"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const submitForm = async ()=>{
        if (!password || !email || !lastName || !firstName){
            alert("Please fill all fields!");
            return
        }
        if (password != password2){
            alert("Passwords do not match!");
            return;
        }
        const status_ = await userLogin(email, password)
        if (status_ === "success"){
          return (<Navigate to={"/main"}/>)
        }
    }

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope: ""
            })
        }

        gapi.load('client:auth2', start);
    })
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="assets/images/image01.jpg"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <LoginButton text={"Log in with Google"} mode={"login"}/>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/register">Register</Link>
        </div>
      </div>
    </section>
  );
}

export default Login
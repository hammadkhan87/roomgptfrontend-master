import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import LoginButton from "../components/LoginButton";
import { gapi } from "gapi-script";

const Register = ()=>{
    const clientId = "706892910099-hf7fogsfftmeag62r4nhfuifcn8h0nld.apps.googleusercontent.com"


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");



    const submitForm = ()=>{
        if (!password || !email || !lastName || !firstName){
            alert("Please fill all fields!");
            return
        }
        if (password != password2){
            alert("Passwords do not match!");
            return;
        }
    }

const loadGoogle = ()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope: ""
            })
        }

        gapi.load('client:auth2', start);
      }
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="assets/images/image01.jpg"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div onClick={loadGoogle}>
          <LoginButton text={"Register with Google"} mode={"register"}/>
          </div>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="First Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Last Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
}

export default Register
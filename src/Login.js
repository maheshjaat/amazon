import React,{useState} from 'react'
import "./Login.css"
import LOG from "./images/unnamed.jpeg"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase'


function Login() {
   const history=useHistory()
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

     const login= (event) => {
         event.preventDefault()    //this will stops the refresh!!!
         //do login logic...

         auth.signInWithEmailAndPassword(email,password)
         .then((auth) => {
             //logged in,redirect to homepage
             history.push("/")
         })
         .catch(e => alert(e.message))
     }

     const register= (event) => {
        event.preventDefault()    //this will stops the refresh!!!
        //do login logic...
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //create a user and logged in....
            history.push("/")
        })
        .catch((e)=> alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src={LOG}
                alt=""
                />
            </Link>
           <div className="login__container">
               <h1>Sign-In</h1>
               <form>
                   <h5>E-mail</h5>
                   <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                   <h5>Password</h5>
                   <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                   <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
               </form>
               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
               <br></br>
               <br></br>
               <h4>-----------New to Amazon?-----------</h4>
               <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
           </div>
           
        </div>
    )
}

export default Login

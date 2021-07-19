

import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let history = useHistory()


    useEffect(() => {
        if(token['mytoken']) {
            history.push('/articles')
        }
    }, [token])

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => setToken('mytoken',resp.token))
        .catch(error => console.log(error))

    }

    const RegisterBtn = () => {
        APIService.RegisterUser({username, password})
        .then(() =>  loginBtn())
        .catch(error =>console.log(error))

    }
    return (

        <div className = " App">
            <div className = "col-md-4 bg-light" style={{marginLeft:"450px", borderRadius: "20px", marginTop:"150px" }}>
            <br/>
            <br/>
            {isLogin ? <h3 style={{textAlign:"center", color:"black"}}>Login </h3> : <h3 style={{textAlign:"center", color:"black"}}>Register Now </h3>}
            

        

            <div className = "mb-3 ">
            {/* <label htmlFor = "username" style={{color:"black"}} className = "form-label">Username</label> */}
            <input type = "text" className = "form-control col-lg-12" id="username" placeholder = "Enter username"
            value = {username} onChange = {e => setUsername(e.target.value)}
            />

            </div>

            <div className = "mb-3">
            {/* <label htmlFor = "password" style={{color:"black"}}  className = "form-label">Password</label> */}
            <input type = "password" className = "form-control col-lg-12" id="password" placeholder = "Enter password"
            value = {password} onChange = {e => setPassword(e.target.value)}
            
            />

            </div>

            {isLogin ?  <button onClick = {loginBtn} className = "btn btn-primary btn-block">Login</button>
            :  <button onClick = {RegisterBtn} className = "btn btn-primary btn-block ">Register</button>
        }

           
            <div className = "mb-3">
            <br/>
            {isLogin ? <h6 style={{color:"black", marginBottom:"20px"}}>Don't Have Account, <a className = "btn btn-outline-primary" onClick = {() => setLogin(false)} style={{marginBottom:"20px"}} >Register Now</a></h6>
            
             :  <h6 style={{color:"black", marginBottom:"20px"}}>Already Have an Account  <a className = "btn btn-outline-primary" onClick = {() => setLogin(true)} style={{marginBottom:"20px"}}  >Login</a></h6>
            }

            </div>
            </div>

        </div>
    )
}

export default Login

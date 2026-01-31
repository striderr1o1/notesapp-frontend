import "../styles/login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ApiRequestPost } from "../api/client";

function Login(){
    
    const [username, setUsername] = useState('');
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    //write function
    async function SendData(e){
        e.preventDefault()
        console.log(username)
        console.log(password)
        let data = {
            username: username,
            password: password
        }

        let response = await ApiRequestPost("login", data);
        if (!response){
            setError('Error in Logging in');
            return;
        }
        if(response.status == 200){
            alert("Logged in")
	    console.log(response);
            navigate('/dashboard')
        }
        if(response.status == 401 || response.status != 200){
            setError('Error in Logging in');
            return;
        }

    }

    return (
        <>
        <div className="parentt-div">
            <form onSubmit={SendData}  action="" id="login-form">
                <h1>Login</h1>
                <p className="labelParas">username</p>
                <input onChange={(e)=>{
                    setUsername(e.target.value);
                    setError('');
                }} type="text" className="login-input" />
                
                <p className="labelParas">password</p>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                    setError('');
                }} type="password" className="login-input" />

                <button type="submit" id="login-submit">Login</button>
                {error && <p className="error-p">{error}</p>}
            </form>
        </div>
        </>
    )
}

export default Login

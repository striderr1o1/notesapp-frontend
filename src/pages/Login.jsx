import "../styles/login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const [username, setUsername] = useState('');
const [password, setPassword] = useState('')
const [error, setError] = useState('')

function Login(){
//write function
    return (
        <>
        <div className="parentt-div">
            <form action="" id="login-form">
                <h1>Login</h1>
                <p className="labelParas">username</p>
                <input type="text" className="login-input" />
                
                <p className="labelParas">password</p>
                <input type="password" className="login-input" />

                <button type="submit" id="login-submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default Login
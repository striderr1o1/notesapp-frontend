import "../styles/signup.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ApiRequestPost } from "../api/client"
import logger from "../utils/logger.js"
function Signup(){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function SendData(e){
         e.preventDefault();

         if(username === '' || password === '' || email === ''){
            alert("Complete the form first")
            return
         }
        let data = {
            username: username,
            password: password,
            email: email
        }
        ApiRequestPost("signup", data)
        .then((resp)=>
        {
            logger.info("", resp) 
            if(resp["status"] != 200){
                setError('Error');
                logger.error('signup Failed');
                alert("Account not made")
                return;
            }
            setError('')
            alert("Account made");
            navigate('/login')
            
        }
        ).catch(err=>{
            console.log(err)
            setError("Error")
            logger.error(err)
        })

        
    }

    return(
        <>
        <div className="parent-div">
            <form onSubmit={SendData} action="">
                <h1>Sign-up</h1>
                <div className="enterspace">
                    <label htmlFor="username">username: <input required type="text" 
                    id="username" name="username" placeholder="ranger_cool"
                     onChange={e=>{setUsername(e.target.value); setError('')}}></input>
                    </label>
                    <label htmlFor="password">password: <input required type="password"
                     id="password" name="password" placeholder=""
                      onChange={e=>{setPassword(e.target.value); setError('')}}></input>
                    </label>
                    <label id="emailLabel" htmlFor="email">email: <input required type="email"
                     id="email" name="email" placeholder="abc@email.com"
                      onChange={e=>{setEmail(e.target.value); setError('')}}></input>
                    </label>
                    <button  id="submitbutton" type="submit">submit</button>
            {error && <p className="error-p">{error}</p>}
                </div>

            </form>

        </div>
        </>
    )
}

export default Signup

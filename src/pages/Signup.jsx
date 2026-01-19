import "../styles/signup.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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

        fetch("http://127.0.0.1:8000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: "include",
            body: JSON.stringify(data)
        })
        .then((resp)=>
        {
            console.log(resp);
            if(resp["status"] != 200){
                setError('Error');
                alert("Account not made")
                return;
            }
            setError('')
            alert("Account made");
            navigate('/')
            
        }
        ).catch(err=>{
            console.log(err)
            setError("Error")
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
            {error && <p>{error}</p>}
                </div>

            </form>

        </div>
        </>
    )
}

export default Signup
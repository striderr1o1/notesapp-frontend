import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import logout from "../../api/auth"
 function Logout(){
    
    const navigate = useNavigate()
    useEffect( ()=>{
       async function logout(){
                fetch('http://127.0.0.1:8000/logout', {
                    method: "GET",
                    credentials: "include"
                })
                .then((response)=>{
                    console.log(response)
                    if(response.status == 200){
                        navigate("/")
                        return
                    }
                    navigate("/dashboard")
                })
                .catch(err=>{
                    console.log("Error: " + err);
                    navigate("/")
                })   
}
logout();
        
    })
    return null
}
export default Logout
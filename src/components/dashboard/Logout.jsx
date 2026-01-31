import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../constants"
import { ApiRequestGet } from "../../api/client";
 function Logout(){
    
    const navigate = useNavigate()
    useEffect( ()=>{
       async function logout(){
                
                ApiRequestGet("logout")
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
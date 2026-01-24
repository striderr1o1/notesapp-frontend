import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import logout from "../../api/auth"
 function Logout(){
    const navigate = useNavigate()
    useEffect(async ()=>{
        const status = await logout();
        if (status != 200){
            alert("Error in Logging out");
            navigate("/dashboard");
        }
        if (status == 200){
            alert("Logging out");
            navigate("/");
        }
    })
    return null
}
export default Logout
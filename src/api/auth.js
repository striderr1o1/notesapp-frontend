async function logout(){

    fetch('http://127.0.0.1:8000/logout', {
        method: "GET",
        credentials: "include"
    })
    .then((response)=>{
        console.log(response)
        if(response.status == 200){
            return response.status
        }
        return response.status
    })
    .catch(err=>{
        console.log("Error: " + err);
        
    })

}
export default logout;

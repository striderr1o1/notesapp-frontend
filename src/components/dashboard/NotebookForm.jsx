import "../../styles/notebookform.css"
import { useEffect, useState } from "react";
function NotebookForm({hidefunction, handleNotebookRequest}){
    const [notebookName, setNotebookName] = useState('');
    
    function SendNotebookName(){
        const data = {
            notebookname: notebookName
        }

        fetch("http://127.0.0.1:8000/createnotebook", {
            method: "POST",
            credentials: "include",
            headers:{
                 "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }).then(response=>{
            console.log(response)
            console.log(response.status)
            handleNotebookRequest();
          
        }).catch(err=>{
            console.log("Error: " + err);
        })

    }
    
    return (
        <>
        <form className="notebook-form" action="">
            <input onChange={(e)=>{
                    setNotebookName(e.target.value);
                }} className="notebookname-input" type="text" placeholder="notebook name" />
          
            <div className="buttons-container">
                <button type="button" onClick={hidefunction} className="button-1">Cancel</button>
                <button type="button" onClick={SendNotebookName} className="button-2">Ok</button>
            </div>
        </form>
        </>
    )
}
export default NotebookForm;
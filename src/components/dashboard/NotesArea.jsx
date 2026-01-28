import { useEffect, useState } from "react";
import "../../styles/notesarea.css"
function NotesArea({id, showDesktopFunction}){

    //fetch notes
    //store them 
    const [IDarray, setIDArray] = useState([]);
    const [showIDs, SetShowIDs] = useState(false);
    useEffect(()=>{
        const data = {
            "notebook_id": id
        }
        console.log(id)
        fetch("http://127.0.0.1:8000/getnotes",{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }).then(resp=>{
          let json= resp.json();
          
          return json
        }).then(arr=>{
            console.log(arr);
            setIDArray(arr);
            console.log(IDarray)
            SetShowIDs(true);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="notepage-container">
            <div className="secondary-notes-cont">
                <div onClick={()=>{
                    showDesktopFunction();
                }} className="backbutton"><p>Back</p></div>
                <div className="notes-ref-cont">
                    {/* <p className="notes-list-heading">Notes List</p> */}
                    <div className="render-notes-list">
                      {showIDs && IDarray.map((id)=>
                        (<p className="note-name" key={id}>{id}</p>)
                      )}
                    </div>
                </div>
            </div>
             <div className="primary-notes-cont">
                <div className="writing-div">
                    <div className="panel"></div>
                    <div className="writing-pad">
                       <textarea name="" id="writing-text-area"></textarea>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default NotesArea;
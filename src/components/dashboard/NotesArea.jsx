import { useEffect, useState } from "react";
import Editor from "./Editor";

import "../../styles/notesarea.css"
import { API_BASE_URL } from "../../constants"
function NotesArea({id, showDesktopFunction, notebookID}){

    //fetch notes
    //store them 
    const [IDarray, setIDArray] = useState([]);
    const [showIDs, SetShowIDs] = useState(false);
    const [NoteID, setNoteID] = useState("");
    const [showNote, setShowNote] = useState(false);
    const [newNoteName, setNewNote] = useState("");
    const [Render, increaseRender] = useState(0);

async function sendNewNoteData(){
        const data = {
            notebook_id: notebookID,
            notename: newNoteName,
            data: {}
        }

        let response = await fetch(`${API_BASE_URL}/createnote`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        })

        if(response.status != 200){
            alert("Error");
            return;
        }
        console.log(response)
        let json = await response.json();

        console.log(json);
        increaseRender(Render+1);
    }

    useEffect(()=>{
        const data = {
            "notebook_id": id
        }
        console.log(id)
        fetch(`${API_BASE_URL}/getnotes`,{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }).then(resp=>{
          
          let json= resp.json();
          console.log(json)
          return json
        }).then(arr=>{
            console.log(arr);
            setIDArray(arr);
            console.log(IDarray)
            SetShowIDs(true);
        }).catch((err)=>{
            console.log(err);
        })
    }, [Render])
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
                        (<p onClick={()=>{
                            setNoteID(id);
                            setShowNote(true);
                        }} className="note-name" key={id}>{id}</p>)
                      )}
                    </div>
                </div>
                <div className="create-newnote-div">
                    <p className="newnote-heading">New Note</p>
                    <input onChange={(e)=>{
                        setNewNote(e.target.value);

                    }}
                     type="text" placeholder="note name" name="notename" className="notename-input" />
                    <button onClick={sendNewNoteData} className="newnote-button" type="button">Insert</button>
                </div>

            </div>
             <div className="primary-notes-cont">

                <div className="writing-div">
                    <div className="writing-pad">
                       {/* <textarea name="" id="writing-text-area"></textarea> */}
                      {/* <Editor /> */}
                      {showNote ? <Editor noteid={NoteID} /> : <p className="qoute">"Organizing is part of success"</p> }
                    </div>
                </div>

             </div>
        </div>
    )
}
export default NotesArea;
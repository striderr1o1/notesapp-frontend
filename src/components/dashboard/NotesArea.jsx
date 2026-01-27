import { useEffect, useState } from "react";
import "../../styles/notesarea.css"
function NotesArea({id, showDesktopFunction}){
    return (
        <div className="notepage-container">
            <div className="secondary-notes-cont">
                <div onClick={()=>{
                    showDesktopFunction();
                }} className="backbutton"><p>Back</p></div>
                <div className="notes-ref-cont">
                    {/* <p className="notes-list-heading">Notes List</p> */}
                    <div className="render-notes-list">
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                        <p className="note-name">abc</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotesArea;
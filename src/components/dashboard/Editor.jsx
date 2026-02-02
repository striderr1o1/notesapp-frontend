import Quill from "quill";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { ApiRequestPost } from "../../api/client";
import { StoreObjectInLocalStorage, SaveNoteToCloud } from "../../api/notes";
function Editor({noteid}){
    
    const editorContainerRef = useRef(null);
    const quillRef = useRef(null);
    const saveTimeoutRef = useRef(null);
    useEffect(()=>{
        
        quillRef.current = new Quill(editorContainerRef.current, { theme: 'snow'});
        //IIFE
        (async function(){
            const body = {
            note_id: noteid
            }
        
        let response = await ApiRequestPost("getnotefromid", body);
        let json = await response.json();
        console.log(json);

        quillRef.current.on("text-change", ()=>{
            const contents = quillRef.current.getContents();
            StoreObjectInLocalStorage(noteid, contents);

            if(saveTimeoutRef.current){
                clearTimeout(saveTimeoutRef.current);
            }

            saveTimeoutRef.current = setTimeout(()=>{
                //savetocloud (update)
                SaveNoteToCloud(noteid)
                .then(resp=>{
                    console.log(resp);
                })
                //data is going to the backend, next need to take it and show it to front end
            }, 2000);
        })

    }());
    
    }, [])
    return (
        
        <div id="editor-container">
            <div ref={editorContainerRef} id="editor"></div>
        </div>
    )
}

export default Editor;
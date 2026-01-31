import Quill from "quill";
import { useEffect, useState } from "react";

function Editor({noteid}){
    // const [showEditor, SetShowEditor] = useState(false);

    useEffect(()=>{
        
        const container = document.querySelector('#editor');
        const quill = new Quill(container, { theme: 'snow'});
        // SetShowEditor(true);

        //IIFE
        (async function(){
            const body = {
            note_id: noteid
            }
            let response = await fetch("http://127.0.0.1:8000/getnotefromid", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
        let json = await response.json();
        console.log(json);

        quill.setText(json.data);
        }());

    }, [])
    return (
        
        <div id="editor-container">
            <div id="editor"></div>
        </div>
    )
}

export default Editor;
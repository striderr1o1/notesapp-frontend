import Quill from "quill";
import { useEffect, useState } from "react";

import { ApiRequestPost } from "../../api/client";
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
        
        let response = await ApiRequestPost("getnotefromid", body);
        let json = await response.json();
        console.log(json);

        quill.setText(json.data);
        }());

        console.log(quill.getContents());

    }, [])
    return (
        
        <div id="editor-container">
            <div id="editor"></div>
        </div>
    )
}

export default Editor;
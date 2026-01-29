import Quill from "quill";
import { useEffect, useState } from "react";

function Editor(){
    // const [showEditor, SetShowEditor] = useState(false);
    useEffect(()=>{
        const container = document.querySelector('#editor');
        const quill = new Quill(container, { theme: 'snow'});
        // SetShowEditor(true);

    }, [])
    return (
        
        <div id="editor-container">
            <div id="editor"></div>
        </div>
    )
}

export default Editor;
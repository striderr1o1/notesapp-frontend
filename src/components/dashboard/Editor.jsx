import Quill from "quill";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { ApiRequestPost } from "../../api/client";
import { fetchNoteData, onTextChangeFactory } from "../../api/notes";


function Editor({noteid, currentNoteHandler}){
    
    const [fetchedState, setFetchedState] = useState(false);
    const editorContainerRef = useRef(null);
    const quillRef = useRef(null);
    const saveTimeoutRef = useRef(null);
    const onTextChange = onTextChangeFactory({ noteid, quillRef, saveTimeoutRef });

    //useEffect for quill setup
    useEffect(()=>{
        if(!quillRef.current){
            quillRef.current = new Quill(editorContainerRef.current, { theme: 'snow'});
        }

        quillRef.current.on("text-change",onTextChange);
        setFetchedState(true);

    }, [noteid])

    useEffect(()=>{
        if(fetchedState === true){
        (async function(){
            let json = await fetchNoteData(noteid, setFetchedState);
            quillRef.current.setContents(json.data);
            currentNoteHandler(json.notename);
            console.log("calling")
            setFetchedState(false);
        })();
        }
    }, [fetchedState])
    
    
    return (
        
        <div id="editor-container">
            <div ref={editorContainerRef} id="editor"></div>
        </div>
    )
}

export default Editor;

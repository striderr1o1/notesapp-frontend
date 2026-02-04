import Quill from "quill";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { ApiRequestPost } from "../../api/client";
import { StoreObjectInLocalStorage, SaveNoteToCloud } from "../../api/notes";

function Editor({noteid}){
    const [contents, SetContents] = useState([]);
    const [fetchedState, setFetchedState] = useState(false);
    const editorContainerRef = useRef(null);
    const quillRef = useRef(null);
    const saveTimeoutRef = useRef(null);
    const onTextChange =  ()=>{
            const Contents = quillRef.current.getContents();
            StoreObjectInLocalStorage(noteid, Contents);

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
        }

    const fetchNoteData =async ()=>{
        let body = {
            "note_id": noteid
        }
        let response = await ApiRequestPost("getnotefromid", body);
        let json = await response.json();
        let jsonData = json.data;
        let data = jsonData.ops;
        setFetchedState(true);
        return data;
    }
    useEffect(()=>{
        
        (async function(){
            
            let data = await fetchNoteData();
            SetContents(data);
        })();
        
        if(fetchedState === true){
            quillRef.current = new Quill(editorContainerRef.current, { theme: 'snow'});
        //IIFE
        console.log(contents)
        quillRef.current.setContents(contents); // issue
        console.log("Editor effect ran");

        (async function(){
            const body = {
            note_id: noteid
            }
        
        let response = await ApiRequestPost("getnotefromid", body);
        let json = await response.json();
        // console.log(json);

        quillRef.current.on("text-change",onTextChange);

        return ()=>{
            quillRef.current.off("text-change", onTextChange);
            quillRef.current = null;
            setFetchedState(false);
        };

    }());
        }
    
    }, [fetchedState, noteid])
    return (
        
        <div id="editor-container">
            <div ref={editorContainerRef} id="editor"></div>
        </div>
    )
}

export default Editor;
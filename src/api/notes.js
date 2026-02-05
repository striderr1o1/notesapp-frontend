import { GeneralApiReq } from "./client";
import { ApiRequestPost } from "./client";

export function StoreObjectInLocalStorage(noteid, object){
    localStorage.setItem(noteid, JSON.stringify(object));
}

function fetchObjectFromLocalStorage(noteid){
    let contentsRaw = localStorage.getItem(noteid);
    const contents = contentsRaw ? JSON.parse(contentsRaw) : {}
    console.log(contents)
    return contents;
}

//used in Editor.jsx
export async function SaveNoteToCloud(note_id){
    let contents = fetchObjectFromLocalStorage(note_id);

    let data = {
        "note_contents": contents,
        "note_id": note_id
    }
    let config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: "include",
        body: JSON.stringify(data)
    }

    let response = await GeneralApiReq("replacenote", config);
    return response;
}
export const fetchNoteData =async (noteid)=>{
        let body = {
            "note_id": noteid
        }
        let response = await ApiRequestPost("getnotefromid", body);
        let json = await response.json();
        let jsonData = json.data;
        let data = jsonData.ops;
        
        return data;
    }



//update note

//when the text in the editor changes, i need to store it in the local storage and after 
//sometime, i need to store it in the cloud storage
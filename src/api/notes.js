export function StoreObjectInLocalStorage(noteid, object){
    localStorage.setItem(noteid, JSON.stringify(object));
}

//update note

//when the text in the editor changes, i need to store it in the local storage and after 
//sometime, i need to store it in the cloud storage
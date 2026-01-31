export function StoreObjectInLocalStorage(object){
    localStorage.setItem("object", JSON.stringify(object));
}

//when the text in the editor changes, i need to store it in the local storage and after 
//sometime, i need to store it in the cloud storage
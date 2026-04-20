import { API_BASE_URL } from "../constants";

export async function ApiRequestGet(endpoint){
    let response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: "include"
    })

    return response;
}

export async function ApiRequestPost(endpoint, Body){
    let response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: "include",
        body: JSON.stringify(Body)
    })

    return response;
}
export async function ApiRequestPostGeneral(url, endpoint, Body){
    let response = await fetch(`${url}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: "include",
        body: JSON.stringify(Body)
    })

    return response;
}

export async function GeneralApiReq(endpoint, config){
    let response = await fetch(`${API_BASE_URL}/${endpoint}`, config);
    return response;
}

export const handleBackgroundInput = () => {
    let img = inputRef.current.files[0];
    if (img) {
      // Use createObjectURL for immediate display as requested
      let url = URL.createObjectURL(img);
      shelfRef.current.style.backgroundImage = `url("${url}")`;
      //localStorage.setItem('bookshelf-background', url);
    }
  };



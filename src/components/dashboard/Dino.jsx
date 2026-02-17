import ChromeDinoGame from "react-chrome-dino";
import "../../styles/dino.css";
import { useEffect } from "react";
import {getApChorhdo} from "../../assets/soundStrings/sound";
import getSoundString from "../../assets/soundStrings/sound";
function Dino() {
    useEffect(() => {
        let audioComponents = document.querySelectorAll("audio")
        let string = getSoundString();
        for(let i = 0; i < audioComponents.length; i++){
            audioComponents[i].src = `data:audio/mpeg;base64,${string}`
        }
        const hit = document.getElementById("offline-sound-hit");

        if(hit){
            let str = getApChorhdo()
            hit.src = `data:audio/mpeg;base64,${str}`

        }
    }, [])
    return (
        <ChromeDinoGame />
    )
}

export default Dino;

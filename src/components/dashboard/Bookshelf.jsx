import "../../styles/bookshelf.css"
import { useState, useRef } from "react";
function Bookshelf({books = [], username, showNotesFunction, setNotesIDfunction}){
    const [showOptions, SetShowOptions] = useState(false);
    const [image, setImage] = useState("");

    const handleBackgroundInput = ()=>{
        //need to handle uploaded image and save it as the background
    }
    return (
        <div className="bookshelf">
            <div className="notebooks-shelf">
                <div className="bookshelf-header">
                    <h3 className="name-area">Sup, {username}</h3>
                     <div className="bookshelf-header-button-div">
                        <label id="background-label" for="background-image-shelf" >set background</label>
                        <input type="file" id="background-image-shelf" accept="image/*" onInput={handleBackgroundInput}/>
                        
                     </div>
                </div>
                <div className="notebooks-space">
                   {books.map((book)=>(
                        <div key={book._id} onClick={()=>{
                                showNotesFunction();
                                setNotesIDfunction(book._id);
                        }}  className="notebook">
                            <div className="notebook-div notebook-div-upper" onMouseLeave={()=>{
                                    SetShowOptions(false);
                                }}>
                                <div className="button-div">
                                    <button onMouseOver={()=>{
                                        SetShowOptions(true);
                                    }}
                                     className="options-button" type="button">...</button>
                                </div>
                                {showOptions && <div className="options-div">
                                    <button className="delete-book-button" type="button">delete</button>
                                    </div>}
                            </div>
                            <div className="notebook-p-div"><p className="notebook-name">{book.notebook_name}</p></div>
                            <div className="notebook-div"></div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
export default Bookshelf;
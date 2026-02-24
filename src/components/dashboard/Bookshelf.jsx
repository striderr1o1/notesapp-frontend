import "../../styles/bookshelf.css";
import { ApiRequestPost } from "../../api/client";
import { useState, useRef, useEffect } from "react";
import Dino from "./Dino";
import logger from "../../utils/logger.js"

function Bookshelf({
  books = [],
  username,
  renderFunction,
  showNotesFunction,
  setNotesIDfunction,
}) {
  const [showOptions, SetShowOptions] = useState(false);
  const inputRef = useRef(null);
  const shelfRef = useRef(null);
  const [activeID, setActiveID] = useState("");
  const [isDeleteActive, SetDeleteActive] = useState(false);

  useEffect(() => {
    //const savedBackground = localStorage.getItem('bookshelf-background');
    //if (savedBackground && shelfRef.current) {
    //	shelfRef.current.style.backgroundImage = `url("${savedBackground}")`;
    //
    //}
  }, []);

  const handleBackgroundInput = () => {
    let img = inputRef.current.files[0];
    if (img) {
      // Use createObjectURL for immediate display as requested
      let url = URL.createObjectURL(img);
      shelfRef.current.style.backgroundImage = `url("${url}")`;
      //localStorage.setItem('bookshelf-background', url);
    }
  };

  const handleDeleteNotebook = async () => {
    let data = {
      notebook_id: activeID,
    };

    let response = await ApiRequestPost("deletenotebook", data);
    if (response.status != 200) {
      logger.error("Error in deleting notebook")
    }
    console.log("notebook delete req resp: " + response);
    logger.info("", response)
    renderFunction();
  };

  return (
    <div className="bookshelf">
      <div ref={shelfRef} className="notebooks-shelf">
        <div className="bookshelf-header">
          <h3 className="name-area">Sup, {username}</h3>
          <div className="bookshelf-header-button-div">
            <label id="background-label" for="background-image-shelf">
              set background
            </label>
            <input
              ref={inputRef}
              type="file"
              id="background-image-shelf"
              accept="image/*"
              onInput={handleBackgroundInput}
            />
          </div>
        </div>
        <div className="notebooks-space">
          {books.map((book) => (
            <div
              key={book._id}
              onClick={() => {
                if (isDeleteActive != true) {
                  showNotesFunction();
                  setNotesIDfunction(book._id);
                }
              }}
              className="notebook"
            >
            <div className="notebook-left-div"></div>  
            <div className="notebook-right-div">
              <div
                className="notebook-div notebook-div-upper"
                onMouseLeave={() => {
                  SetShowOptions(false);
                  setActiveID("");
                }}
              >
                <div className="button-div">
                  <button
                    onMouseOver={() => {
                      setActiveID(book._id); //user enters div, set that book id as active ID, if it checks
                      // active ID against another books id, it becomes false
                      SetShowOptions(true);
                    }}
                    className="options-button"
                    type="button"
                  >
                    ...
                  </button>
                </div>
                {activeID == book._id && (
                  <div className="options-div">
                    <button
                      onClick={handleDeleteNotebook}
                      className="delete-book-button"
                      type="button"
                      onMouseEnter={() => {
                        SetDeleteActive(true);
                      }}
                      onMouseLeave={() => {
                        SetDeleteActive(false);
                      }}
                    >
                      delete
                    </button>
                  </div>
                )}
              </div>
              <div className="notebook-p-div">
                <p className="notebook-name">{book.notebook_name}</p>
              </div>
              <div className="notebook-div"></div>
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dino">
        <Dino/>
      </div>
    </div>
  );
}
export default Bookshelf;

import "../../styles/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import NotebookForm from "./NotebookForm"
function Sidebar({HandleNotebookRequest, books, setNotesIDfunction, showNotesFunction}){

    const [notebookForm, SetnotebookForm] = useState(false);
    const [hoverOnNotebooks, SetHover] = useState(false)
    function ShowForm(){
        SetnotebookForm(true);

    }

    function HideForm(){
        SetnotebookForm(false);
    }

    function setNotebookHover(){
        SetHover(true)
    }

    function UnsetNotebookHover(){
        SetHover(false)
    }


    return(
        <>
        
            <nav className="sidebar-nav">
                <div className="heading-n-button-div">
                
                    <h2 className="sidebar-heading">Dashboard</h2>
                </div>
                <div className="notebooks-div">
                  <div className="nb-sign">
                    <FontAwesomeIcon className="font-book" icon={faBook} />
                  </div>
                  <div className="nb-heading">Notebooks</div>
                  <div onMouseOver={setNotebookHover} onMouseOut={UnsetNotebookHover} className="notebook-render-div">
                    {hoverOnNotebooks && books.map((book)=>(
                        <div className="booknames"  key={book._id} onClick={
                            ()=>{
                                showNotesFunction();
                                setNotesIDfunction(book._id);
                                
                            }
                        }>{book.notebook_name}</div>
                    ))}
                  </div>
                </div>
                <div className="others-sidebar">
                    <div onClick={ShowForm} className="create-new-nb">+</div>
                    {notebookForm && <NotebookForm handleNotebookRequest={HandleNotebookRequest}  hidefunction={HideForm}/>}
                </div>

            </nav>
        </>
    )
}
export default Sidebar;
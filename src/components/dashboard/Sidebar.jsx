import "../../styles/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function Sidebar(){
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
                  <div className="nbs-render-div">
                  </div>
                </div>
                <div className="others-sidebar">
                    <div className="create-new-nb">+</div>
                </div>
            </nav>
        </>
    )
}
export default Sidebar;
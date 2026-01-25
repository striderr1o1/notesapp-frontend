import "../../styles/bookshelf.css"

function Bookshelf({books = [], username}){


    return (
        <div className="bookshelf">
            <div className="notebooks-shelf">
                <h3 className="name-area">Sup, {username}</h3>
                <div className="notebooks-space">
                   {books.map((book)=>(
                        <div key={book._id} className="notebook">
                            <p className="notebook-name">{book.notebook_name}</p>
                        </div>
                    ))} 
                    
                </div>
            </div>
        </div>
    )
}
export default Bookshelf;
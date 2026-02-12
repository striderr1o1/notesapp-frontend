import "../../styles/bookshelf.css"
import { useState, useRef, useEffect } from "react";
function Bookshelf({books = [], username, showNotesFunction, setNotesIDfunction}){
	const [showOptions, SetShowOptions] = useState(false);
	const [image, setImage] = useState("");
    const inputRef = useRef(null);
	const shelfRef = useRef(null)

	useEffect(() => {
		//const savedBackground = localStorage.getItem('bookshelf-background');
		//if (savedBackground && shelfRef.current) {
		//	shelfRef.current.style.backgroundImage = `url("${savedBackground}")`;
		//	
		//}
	}, []);

	const handleBackgroundInput = (e)=>{
		let img = inputRef.current.files[0];
		if(img){
			
			// Use createObjectURL for immediate display as requested
			let url = URL.createObjectURL(img)
			shelfRef.current.style.backgroundImage = `url("${url}")`
			//localStorage.setItem('bookshelf-background', url);
		}
	}
	return (
		<div className="bookshelf">
			<div ref={shelfRef} className="notebooks-shelf">
				<div className="bookshelf-header">
					<h3 className="name-area">Sup, {username}</h3>
					<div className="bookshelf-header-button-div">
						<label id="background-label" for="background-image-shelf" >set background</label>
						<input ref={inputRef} type="file" id="background-image-shelf" accept="image/*" onInput={handleBackgroundInput}/>

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

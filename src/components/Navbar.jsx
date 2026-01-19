import "../styles/navbar.css"
import { Link } from "react-router-dom";
function Navbar(){

	return (
	<>
       <header>
		<nav id="navbar">
		<div className="logo-div">
			<img src="src/assets/logo.png" alt="" />
		</div>
		<div className="links-div">
			<a className="links" href="/">Home</a>
			<a className="links" href="">About</a>
			<a className="links" href="">Contact Us</a>
		</div>
		<div className="authlinks">
			<Link className="links" to="/signup">Signup</Link>
			<Link className="links" to="/login">Login</Link>
		</div>
	</nav>

	</header>
	</>

	)
}

export default Navbar;


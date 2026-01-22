import "../styles/navbar.css"
import { Link } from "react-router-dom";
function Navbar({logopath, aLinks = [], routerLinks = []}){

	return (
	<>
       <header>
		<nav id="navbar">
		<div className="logo-div">
			<img src={logopath} alt="" />
		</div>
		<div className="links-div">
			{
			aLinks.map((link)=>(
				<a key={link.name} className="links" href={link.href}>{link.name}</a>
			))
			}

		</div>
		<div className="authlinks">
			{
			routerLinks.map((link)=>(
				<Link key={link.name} className="links" to={link.to}>{link.name}</Link>
			))
			}
			
		</div>
	</nav>

	</header>
	</>

	)
}

export default Navbar;


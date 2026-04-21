import "../styles/navbar.css"
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar({logopath, aLinks = [], routerLinks = []}){
	const navigate = useNavigate();
	const location = useLocation();

	// href is like "#about" — navigate to home then scroll to section
	const handleAnchorClick = (e, href) => {
		e.preventDefault();
		const sectionId = href.startsWith('#') ? href.slice(1) : href;
		const scrollToSection = () => {
			const el = document.getElementById(sectionId);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		};
		if (location.pathname === '/') {
			scrollToSection();
		} else {
			navigate('/');
			setTimeout(scrollToSection, 100);
		}
	};

	return (
	<>
       <header>
		<nav id="navbar">
		<div className="logo-div">
			<img src={import.meta.env.BASE_URL + logopath} alt="" />
		</div>
		<div className="links-div">
			{
			aLinks.map((link)=>(
				<a key={link.name} className="links" href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}>{link.name}</a>
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


import Navbar from './components/Navbar.jsx';
import './App.css'
import AppRoutes from "./routes/AppRoutes.jsx";
import './styles/hero.css';
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const links = [
    { name: "Home", href: "/"},
    { name: "About", href: "/"},
    { name: "Contact Us", href: "/"},
  ]

  const RouterLinks = [
    { name: "Signup", to: "/signup"},
    { name: "Login", to: "/login"}
  ]

  const logoPath = "/logo.png"
  
  return(
	  <>
       {location.pathname !== '/dashboard' && <Navbar logopath={logoPath} aLinks={links} routerLinks={RouterLinks}/>}
       <AppRoutes />
       {/* Persistent chatbot button — fixed to bottom-right on all pages */}
       <div className="chatbot-div">
         <button className="chatbot-button">Chatbot</button>
       </div>
	  </>
 )
}

export default App

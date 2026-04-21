import Navbar from './components/Navbar.jsx';
import Chatbot from './components/Chatbot.jsx';
import './App.css'
import AppRoutes from "./routes/AppRoutes.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const links = [
    { name: "Home", href: "/#home"},
    { name: "About", href: "/#about"},
    { name: "Contact Us", href: "/#contact"},
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
       {/* Persistent chatbot — fixed to bottom-right on all pages */}
       <Chatbot />
	  </>
 )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar.jsx';
import './App.css'
import AppRoutes from "./routes/AppRoutes.jsx";
function App() {
  const [count, setCount] = useState(0)

  return(
	  <>
       <Navbar />
       <AppRoutes />
	  </>
 )
}

export default App

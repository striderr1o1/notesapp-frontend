import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
function AppRoutes(){
    return (
    <Routes>
           <Route path="/" element = {<Home />} />
           <Route path="/signup" element = { <Signup />}/>
	</Routes>
    )
}

export default AppRoutes
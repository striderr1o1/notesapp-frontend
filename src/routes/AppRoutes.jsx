import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Logout from "../components/dashboard/Logout";
import ProtectedRoute from "../components/requireAuth";
function AppRoutes(){
    return (
    <Routes>
           <Route path="/" element = {<Home />} />
           <Route path="/signup" element = { <Signup />}/>
           <Route path="/login" element = { <Login />} />
           <Route path="/dashboard" element = {<ProtectedRoute><Dashboard /></ProtectedRoute>} />
           <Route path="/logout" element = {<Logout />}></Route>
	</Routes>
    )
}

export default AppRoutes

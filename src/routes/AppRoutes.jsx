import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Logout from "../components/dashboard/Logout";
//import ProtectedRoute from "../components/requireAuth";
import { useEffect, useState } from "react";
function AppRoutes(){

    //const [loggedIn, setLoggedIn] = useState(false);

    //function UpdateLogInState(status){
    //    setLoggedIn(status);
    //}
    //useEffect(()=>{console.log("good"); console.log(loggedIn)}, [loggedIn])
    return (
    <Routes>
           <Route path="/" element = {<Home />} />
           <Route path="/signup" element = { <Signup />}/>
           <Route path="/login" element = { <Login />} />
           <Route path="/dashboard" element = {<Dashboard/> } />
           <Route path="/logout" element = {<Logout />}></Route>
	</Routes>
    )
}

export default AppRoutes

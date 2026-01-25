import Navbar from "../components/Navbar"
import Sidebar from "../components/dashboard/Sidebar"
import Bookshelf from "../components/dashboard/Bookshelf"
import { useEffect } from "react"
import { useState } from "react"
import "../styles/dashboard.css"
function Dashboard(){
    const [notebooksList, setNotebooks] = useState([])
    const [username, setUsername] = useState('')
    const [notebookRequestSent, setNoteBookRequest] = useState(false);

    function HandleNotebookRequest(){
        setNoteBookRequest(true);
    }

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/getnotebooks", {
            method: "GET",
            credentials: "include"
        }).then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data)
            
            let username = data.username;
            setUsername(username);
            setNotebooks(data.notebooks_list)
        }).catch(err=>{
            console.log("Error: " + err);
        })
    }, [notebookRequestSent])
    const routerlinks = [
        {name: "Logout", to: "/logout"}//can add on click
    ]
    return (
        <>
        <Navbar logopath="src/assets/logo.png" aLinks={[]} routerLinks={routerlinks} />
        <div className="main">
            <Bookshelf  books={notebooksList} username={username} className="bookshelf"/>
            <Sidebar books={notebooksList} HandleNotebookRequest={HandleNotebookRequest}  className="sidebar" />
        </div>
        </>
    )
}

export default Dashboard
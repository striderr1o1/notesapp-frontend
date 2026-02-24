import logger from "../utils/logger.js"
import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import Bookshelf from "../components/dashboard/Bookshelf";
import NotesArea from "../components/dashboard/NotesArea";
import { useEffect } from "react";
import { useState } from "react";
import { ApiRequestGet } from "../api/client";
import "../styles/dashboard.css";

function Dashboard() {
  const [notebooksList, setNotebooks] = useState([]);
  const [username, setUsername] = useState("");
  const [notebookRequestSent, setNoteBookRequest] = useState(false);
  const [showNotes, SetShowNotes] = useState(false);
  const [NotebookID, SetNotebookID] = useState("");
  const [render, setRender] = useState(0);
  
  function Rerender() {
    setRender(render + 1);
  } 
  function HandleShowNotes() {
    SetShowNotes(true);
  }
  function HandleNotShowNotes() {
    SetShowNotes(false);
  }

  function HandleNotebookId(id) {
    SetNotebookID(id);
  }

  function HandleNotebookRequest() {
    setNoteBookRequest(true);
  }
  function removeNulls(arr) {
    return arr.filter((item) => item !== null); //AI wrote this function because the backend was throwing null objects
  }
  useEffect(() => {
    ApiRequestGet("getnotebooks")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let username = data.username;
        setUsername(username);
        let notebooks_list = removeNulls(data.notebooks_list);
        setNotebooks(notebooks_list);
      })
      .catch((err) => {
        logger.error(err)
      });
  }, [notebookRequestSent, render]);

  const routerlinks = [
    { name: "Logout", to: "/logout" }, //can add on click
  ];
  return (
    <>
      <Navbar
        logopath="src/assets/logo.png"
        aLinks={[]}
        routerLinks={routerlinks}
      />
      <div className="main">
        {showNotes ? (
          <NotesArea
            showDesktopFunction={HandleNotShowNotes}
            notebookID={NotebookID}
            id={NotebookID}
          />
        ) : (
            <Bookshelf
            renderFunction = {Rerender}
            setNotesIDfunction={HandleNotebookId}
            showNotesFunction={HandleShowNotes}
            books={notebooksList}
            username={username}
            className="bookshelf"
          />
        )}

        <Sidebar
          setNotesIDfunction={HandleNotebookId}
          showNotesFunction={HandleShowNotes}
          books={notebooksList}
          HandleNotebookRequest={HandleNotebookRequest}
          className="sidebar"
        />
      </div>
    </>
  );
}

export default Dashboard;

//notes id handlers going into bookshelf and sidebar to where they are being rendered. On clicking them, book ids are set
// and show notes is made true
// use effect makes fetch call, fetching user notebooks, and re renders when notebookRequestSent, thats what i think i did there

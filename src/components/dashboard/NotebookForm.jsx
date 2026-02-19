import "../../styles/notebookform.css";
import { useState } from "react";
import { API_BASE_URL } from "../../constants";
//hi i am good

function NotebookForm({ hidefunction, handleNotebookRequest }) {
  const [notebookName, setNotebookName] = useState("");

  function SendNotebookName() {
    const data = {
      notebookname: notebookName,
    };

    fetch(`${API_BASE_URL}/createnotebook`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        console.log(response.status);
        handleNotebookRequest();
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  return (
    <>
      <form className="notebook-form" action="">
        <input
          onChange={(e) => {
            setNotebookName(e.target.value);
          }}
          className="notebookname-input"
          type="text"
          placeholder="notebook name"
        />

        <div className="buttons-container">
          <button type="button" onClick={hidefunction} className="button-1">
            Cancel
          </button>
          <button type="button" onClick={SendNotebookName} className="button-2">
            Ok
          </button>
        </div>
      </form>
    </>
  );
}
export default NotebookForm;

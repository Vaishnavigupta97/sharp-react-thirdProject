import { useState } from "react";
import Form from "./Components/Form.js";
import ShowList from "./Components/ShowList.js";
import Popup from "./Components/Popup.js";
import "./App.css";

function App() {
  const [popupBox, setPopupBox] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [errormsg, setErrorMsg] = useState("");
  // let pera;
  const formObjHandler = (objArg) => {
    if (objArg.formAge > 0) {
      setList((prevData) => {
        return [...prevData, objArg];
      })
    } else {
      setList((prevData) => {
        return [...prevData];
      })
    }
    // if (objArg.formAge <= 0 || objArg.formName === "" || objArg.collegeName == "") {
    //   setPopupBox(true);
    // }
    if (objArg.formName.length === "" || objArg.formAge.length == "" || objArg.collegeName == "") {
      setPopupBox(true);
      setError(true);
      setErrorMsg("Please enter a valid name and age (non-empty Values).")
    }
    if (objArg.formAge < 0) {
      setPopupBox(true);
      setError(true);
      setErrorMsg("Please enter a valid age (>0).")
    } 
  }
  const cancelPopupBox = () => {
    setPopupBox(false);
  }
  return (
    <div className="App">
      <Form addFormObj={formObjHandler} />
      {popupBox === false && (<ShowList showTodoList={list} />)}
      {popupBox === true && (error && <Popup cancelPopUp={cancelPopupBox}
        error={errormsg} />)}
        {/* {pera} */}
    </div>
  );
}

export default App;

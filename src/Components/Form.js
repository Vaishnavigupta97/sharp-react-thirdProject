import { useState } from "react";
import Wrapper from "../wrapComponent/Wrapper";
// import Popup from "./Popup";

const Form = (props) => {
    const [name, setname] = useState("");
    const [age, setAge] = useState([]);
    // const [error, setError] = useState(false);
    // const [popUp, setPopUp] = useState("");

    const usernameHandler = (event) => {
        setname(event.target.value);
    }
    const userAgeHandler = (event) => {
        setAge(event.target.value);   
    }
    const formChangeHandler = (e) =>{
        e.preventDefault();
        const saveObj = {
         id : Math.random(),   
         formName : name,
         formAge : age 
        }
        // if(name.length == "" || age.length == ""){
        //     setError(true);
        // }
        props.addFormObj(saveObj);
        setname("");
        setAge("");
    }
    return(
        <Wrapper>
        <form onSubmit={formChangeHandler}> 
           <div className="formcard">
            <div className="formLabelCard">
                <label><strong>UserName </strong></label> <br />
                <input type="text" value={name} onChange={usernameHandler}/>
            </div>
            <div className="formLabelCard">
                <label><strong>Age (Years) </strong></label> <br />
                <input type="number" value={age} onChange={userAgeHandler}/>
            </div>
            <button type="submit">Add User</button>
            </div>
        </form>
        {/* {error && <Popup error="Please enter a valid name and age(non-empty values)," />} */}
        </Wrapper>
    )
}

export default Form;
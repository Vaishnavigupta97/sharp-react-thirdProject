import { useState, useRef } from "react";
import Wrapper from "../wrapComponent/Wrapper";
// import Popup from "./Popup";

const Form = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const formChangeHandler = (e) =>{
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollegeName = collegeInputRef.current.value;

        const saveObj = {
         id : Math.random(),   
         formName : enteredName,
         formAge : enteredAge,
         collegeName : enteredCollegeName 
        }
        props.addFormObj(saveObj);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
        collegeInputRef.current.value = "";
    }
    return(
        <Wrapper>
        <form onSubmit={formChangeHandler}> 
           <div className="formcard">
            <div className="formLabelCard">
                <label><strong>UserName </strong></label> <br />
                <input type="text" ref={nameInputRef}/>
            </div>
            <div className="formLabelCard">
                <label><strong>CollegeName </strong></label> <br />
                <input type="text" ref={collegeInputRef}/>
            </div>
            <div className="formLabelCard">
                <label><strong>Age (Years) </strong></label> <br />
                <input type="number"ref={ageInputRef}/>
            </div>
            <button type="submit">Add User</button>
            </div>
        </form>
        {/* {error && <Popup error="Please enter a valid name and age(non-empty values)," />} */}
        </Wrapper>
    )
}

export default Form;
const Popup = (props) => {
    const cancelPopupBox = () => {
        props.cancelPopUp();
    }
    return (
        <>
            <div className="popUpBoxCard">
                <p>Invalid Input</p>
                <p>{props.error}</p>
                <button onClick={cancelPopupBox}>Ok</button>
            </div>
        </>
    )
}
export default Popup;
const ShowList = (props) => {
    return (
        <>
            <div className="coverListItem">
                <ol >
                    {props.showTodoList.map((item) => {
                        return (
                            <li key={item.id}>{item.formName} (College Name : {item.collegeName}) ({item.formAge} Years Old)</li>
                        );
                    })}
                </ol>
            </div>
        </>
    )
}

export default ShowList;
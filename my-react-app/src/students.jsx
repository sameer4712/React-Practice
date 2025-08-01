
function Student(props){
    return(
        <div className="student">
            <h1>name: {props.name}</h1>
            <p>Age: {props.Age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student
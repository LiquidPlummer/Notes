

function ChildComponent(props) {
    
    let localCopy = props.initialVal;

    return (
        <>
            <button onClick={(e)=>{props.changeValue(++localCopy); console.log(e);}}>Click here!</button>
        </>
    );
}

export default ChildComponent;
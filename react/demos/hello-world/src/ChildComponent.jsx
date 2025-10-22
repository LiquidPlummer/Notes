function ChildComponent(props) {
    let testValueLocalCopy = props.testValue

    return(
        <>
            <p>This is the child component!</p>
            <p>testValue: {props.testValue}</p>
            <p>Hello, {props.name}!</p>
            <p>You are {props.age} years old!</p>
            <button onClick={props.changeTestValue(++testValueLocalCopy)}>child button!</button>
        </>
    );
}

export default ChildComponent



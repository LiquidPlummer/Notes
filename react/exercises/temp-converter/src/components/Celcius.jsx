

function Celcius(){

    function handleChange(event) {
        setInput(event.target.value);
    }


    return (
        <>
            <div>
                <label>Celsius</label>
                <input type="number" onChange={handleChange}></input>
                <button onClick={}>Convert C to F</button>
            </div>
        </>
    );
    
}

export default Celcius;
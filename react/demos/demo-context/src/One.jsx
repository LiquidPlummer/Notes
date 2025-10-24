import { DataContext } from "./App";
import { useContext } from "react";

function One() {

const {data, setData} = useContext(DataContext);

    return (
        <>
            <p>This is the One component, and will set this data to the context:</p>
            <input type="text" onChange={(e)=>{setData(e.target.value)}} />
        </>
    );
}

export default One;
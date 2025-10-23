import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent(){

    let [val, changeVal] = useState(0)

    


    return(
        <>
            <p>{val}</p>
            <ChildComponent initialVal={val} changeValue={changeVal}></ChildComponent>
        </>
    );
}

export default ParentComponent;
import { DataContext } from "./App";
import { useContext } from "react";

function Two() {
    const {data} = useContext(DataContext);

    return (
        <>
            <p>Data:</p>
            <p>{data}</p>
        </>
    );
}

export default Two;
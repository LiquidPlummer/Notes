import { Link , Route, Routes} from "react-router-dom";
import One from "./One";
import Two from './Two';

function Three(){
    return (
    <>
        <h1>Three!!</h1>
        <Link to="/one" element={<One></One>}>Click me to go back to 1</Link>

    </>
);
}

export default Three;
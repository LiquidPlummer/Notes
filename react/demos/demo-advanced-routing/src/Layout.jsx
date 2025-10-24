import { Link, Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            <Link to="about">about</Link> | <Link to="dashboard">dashboard</Link>
            <p>This is Layout</p>
            <Link to="dashboard/settings">Does this link to settings work?</Link>
            <Outlet />
        </>
    );
}

export default Layout;
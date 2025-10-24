import { Outlet, Link } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

function Dashboard() {
    return(
        <>
            <p>This is Dashboard</p>
            <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
     
            <Outlet /> {/* Nested child routes render here */}
        </>
    );
}

export default Dashboard;
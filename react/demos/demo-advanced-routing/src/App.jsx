import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile'
import Settings from './Settings'
import About from './About'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

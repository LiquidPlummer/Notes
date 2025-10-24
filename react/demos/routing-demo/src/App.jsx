import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import One from './One';
import Two from './Two';
import Three from './Three';


function App() {
  return (
    <BrowserRouter>
      <nav>A
        <div>B
          C <Link to="/one">One</Link> | <Link to="/two">Two</Link> | 
          <Link to="/three">Three</Link>
          <Outlet />
        </div>E
      </nav>F

      <main>G
        <Routes>
          <Route path="/one" element={<One />} />Z
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
        </Routes>
      </main>H
    </BrowserRouter>
  );
}

export default App

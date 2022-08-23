import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Show from './pages/Show';
import './App.css';
import Login from './pages/Login';
import User from './pages/User';

function App() {
    const [authenticate, setAuthenticate] = useState(false);
    const PrivateRoute = () => {
        return authenticate === true ? <User /> : <Navigate to="/login" />;
    };
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<Show />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<PrivateRoute />} />
            </Routes>
        </div>
    );
}

export default App;

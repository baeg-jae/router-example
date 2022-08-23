import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;

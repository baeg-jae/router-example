import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const goToTheShow = () => {
        navigate('/about?q=data');
    };
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
                <button onClick={goToTheShow}>Show</button>
            </nav>
        </>
    );
};

export default Home;

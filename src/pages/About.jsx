import { Link, useSearchParams } from 'react-router-dom';

const About = () => {
    let [query, setQuery] = useSearchParams();
    console.log('ddd', query.get('q'));
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>That feels like an existential question, don't you think?</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
};

export default About;

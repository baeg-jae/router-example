import { useSearchParams } from 'react-router-dom';

const Show = () => {
    let [query, setQuery] = useSearchParams();
    console.log('ddd', query.get('q'));
    return <h1>Show</h1>;
};

export default Show;

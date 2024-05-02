import { useCustom } from './ComponentCustomUse';

// Routing
import { useParams, useNavigate } from 'react-router-dom';

const ComponentCustom = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const [number, setCustomNumber] = useCustom(0);

    return (
        <>
            <h1>{props.title}</h1>
            <h1>{params.title}</h1>
            <h2>{number}</h2>
            <button type="button" onClick={() => setCustomNumber(number + 1)}>Click</button>
            <button type="button" onClick={() => navigate('/')}>Redirect</button>
        </>);
};

export default ComponentCustom;

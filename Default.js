// Routing
import { Link } from 'react-router-dom';

const Default = () => {
    return (
        <>
            | <Link to="/">Home</Link> |
            | <Link to="/custom/hello">Custom</Link> |
        </>
    );
};

export default Default;

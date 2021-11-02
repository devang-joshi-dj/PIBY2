import { React } from 'react';
import './heading.css';

const Heading = (props) => {
    return (
        <>
            <h1 className="heading">
                {props.children}
            </h1>
        </>
    );
}

export default Heading;
import { React } from 'react';
import './heading.css';
import Flip from 'react-reveal/Flip';

const Heading = (props) => {
    return (
        <>
            <h1 className="heading">
                <Flip left cascade>
                    {props.children}
                </Flip>
            </h1>
        </>
    );
}

export default Heading;
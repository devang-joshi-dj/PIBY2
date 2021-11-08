import React from 'react';
import './sets.css';
import Heading from '../../../Miscs/Heading/Heading';
import SetsPlayArea from './SetsPlayArea/SetsPlayArea';

const Sets = () => {
    return (
        <>
            <div className="sets">
                <Heading>Sets</Heading>
                <SetsPlayArea />
            </div>
        </>
    );
}

export default Sets;
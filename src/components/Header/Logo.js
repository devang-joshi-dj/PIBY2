import React, { useState } from 'react';
import imagesPath from '../config';

const Logo = () => {
    return (
        <>
            <div className="logo">
                <img src={`${imagesPath}/logo.png`} alt="PiBy2 Logo" />
            </div>
        </>
    );
}

export default Logo;
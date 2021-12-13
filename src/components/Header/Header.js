import React from 'react';
import './header.css';
import Logo from './SubHeaders/Logo';
import HeaderSocialMedia from './SubHeaders/HeaderSocialMedia';

const Header = props => {
    const { setDisplaySubPlayArea } = props;

    return (
        <>
            <header>
                <Logo
                    setDisplaySubPlayArea={setDisplaySubPlayArea}
                />
                <HeaderSocialMedia />
            </header>
        </>
    );
}

export default Header;
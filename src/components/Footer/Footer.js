import React from 'react';
import './footer.css';
import FooterContent from './SubFooters/FooterContent';
import FooterSocialMedia from './SubFooters/FooterSocialMedia';
import CopyrightContent from './SubFooters/CopyrightContent';

const Footer = props => {
    const { setDisplaySubPlayArea } = props;

    return (
        <>
            <footer>
                <div className="footer-top">
                    <FooterContent />
                    <FooterSocialMedia />
                </div>
                <div className="footer-bottom">
                    <CopyrightContent
                        setDisplaySubPlayArea={setDisplaySubPlayArea}
                    />
                </div>
            </footer>
        </>
    );
}

export default Footer;
import React from 'react';
import './footer.css';
import FooterContent from './SubFooters/FooterContent';
import FooterSocialMedia from './SubFooters/FooterSocialMedia';
import CopyrightContent from './SubFooters/CopyrightContent';
import FooterMenuLinks from './SubFooters/FooterMenuLinks';

const Footer = (props) => {
    return (
        <>
            <footer>
                <div className="footer-top">
                    <FooterContent />
                    <FooterSocialMedia />
                </div>
                <div className="footer-bottom">
                    <CopyrightContent
                        setDisplaySubPlayArea={props.setDisplaySubPlayArea}
                    />
                    <FooterMenuLinks />
                </div>
            </footer>
        </>
    );
}

export default Footer;
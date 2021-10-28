import React from 'react';
import './footer.css';
import FooterContent from './SubFooters/FooterContent';
import FooterSocialMedia from './SubFooters/FooterSocialMedia';
import CopyrightContent from './SubFooters/CopyrightContent';
import FooterMenuLinks from './SubFooters/FooterMenuLinks';

const Footer = () => {
    return (
        <>
            <footer>
                <FooterContent />
                <FooterSocialMedia />
                <FooterBottom />
            </footer>
        </>
    );
}

const FooterBottom = () => {
    return (
        <>

            <div class="footer-bottom">
                <CopyrightContent />
                <FooterMenuLinks />
            </div>
        </>
    );
}

export default Footer;
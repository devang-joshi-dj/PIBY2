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
                <div className="footer-content">
                    <FooterContent />
                    <FooterSocialMedia />
                </div>
                <div class="footer-bottom">
                    <CopyrightContent />
                    <FooterMenuLinks />
                </div>
            </footer>
        </>
    );
}

export default Footer;
import React from 'react';

const FooterMenuLinks = () => {
    return (
        <>
            <div class="footer-menu-links">
                <ul>
                    <MenuLink
                        href=""
                        linkName="Home"
                    />
                    <MenuLink
                        href=""
                        linkName="About"
                    />
                    <MenuLink
                        href=""
                        linkName="Services"
                    />
                    <MenuLink
                        href=""
                        linkName="Contact"
                    />
                </ul>
            </div>
        </>
    );
}

const MenuLink = (props) => {
    return (
        <>
            <li>
                <a href={props.link}>
                    {props.linkName}
                </a>
            </li>
        </>
    );
}

export default FooterMenuLinks;
import React from 'react';

const HeaderMenuLinks = (props) => {
    return (
        <>
            <div className={
                props.showMediaIcons ?
                    "menu-link mobile-menu-link" :
                    "menu-link"
            }>
                <ul>
                    <MenuLink
                        href=""
                        linkName="Home"
                        setShowMediaIcons={props.setShowMediaIcons}
                        showMediaIcons={props.showMediaIcons} />
                    <MenuLink
                        href=""
                        linkName="About"
                        setShowMediaIcons={props.setShowMediaIcons}
                        showMediaIcons={props.showMediaIcons} />
                    <MenuLink
                        href=""
                        linkName="Services"
                        setShowMediaIcons={props.setShowMediaIcons}
                        showMediaIcons={props.showMediaIcons} />
                    <MenuLink
                        href=""
                        linkName="Contact"
                        setShowMediaIcons={props.setShowMediaIcons}
                        showMediaIcons={props.showMediaIcons} />
                </ul>
            </div>
        </>
    );
}

const MenuLink = (props) => {
    console.log(props);
    return (
        <>
            <li>
                <a
                    href={props.link}
                    onClick={() => props.setShowMediaIcons(!props.showMediaIcons)}
                >
                    {props.linkName}
                </a>
            </li>
        </>
    );
}

export default HeaderMenuLinks;
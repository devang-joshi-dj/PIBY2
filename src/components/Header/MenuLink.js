import React from 'react';

const MenuLink = (props) => {
    return (
        <>
            <div className={
                props.showMediaIcons ?
                    "menu-link mobile-menu-link" :
                    "menu-link"
            }>
                <ul>
                    <li>
                        <a
                            href="#"
                            onClick={() => props.setShowMediaIcons(!props.showMediaIcons)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => props.setShowMediaIcons(!props.showMediaIcons)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => props.setShowMediaIcons(!props.showMediaIcons)}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => props.setShowMediaIcons(!props.showMediaIcons)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MenuLink;
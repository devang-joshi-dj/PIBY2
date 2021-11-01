import React from 'react';
import MenuLinks from '../../Miscs/MenuLinks/MenuLinks';

const HeaderMenuLinks = (props) => {
    return (
        <>
            <div className={
                props.showMediaIcons ?
                    "menu-link mobile-menu-link" :
                    "menu-link"
            }>
                <ul>
                    <MenuLinks
                        setShowMediaIcons={props.setShowMediaIcons}
                        showMediaIcons={props.showMediaIcons}
                    />
                </ul>
            </div>
        </>
    );
}

export default HeaderMenuLinks;
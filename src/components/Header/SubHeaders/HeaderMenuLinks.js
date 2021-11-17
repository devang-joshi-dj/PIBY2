import React from 'react';
import MenuLinks from '../../Miscs/MenuLinks/MenuLinks';

const HeaderMenuLinks = props => {
    const { showMediaIcons, setShowMediaIcons } = props;

    return (
        <>
            <div className={
                showMediaIcons ?
                    "menu-link mobile-menu-link" :
                    "menu-link"
            }>
                <ul>
                    <MenuLinks
                        setShowMediaIcons={setShowMediaIcons}
                        showMediaIcons={showMediaIcons}
                    />
                </ul>
            </div>
        </>
    );
}

export default HeaderMenuLinks;
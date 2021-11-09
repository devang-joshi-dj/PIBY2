import { animateScroll as scroll } from 'react-scroll';

const setUnactiveContent = () => {
    // function for removing active class from all content names
    const contentNameComponent = document.querySelectorAll('.content');
    for (var i = 0; i < contentNameComponent.length; i++) {
        contentNameComponent[i].className = contentNameComponent[i].className.replace(' activeContent', '');
    }
}

const handleLogoOnClick = () => {
    // function handling all functions to happen after clicking on logo
    setUnactiveContent();
    scroll.scrollToTop();
    document.title = 'Pi/2';
}

export default handleLogoOnClick;
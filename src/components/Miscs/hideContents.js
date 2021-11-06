import { CONTENTS } from '../../components/Contents/contents.json';

const hideContents = () => {
    // function for setting all play-area children style to display:none
    CONTENTS.map((content) => {
        const className = content.name.toLowerCase().trim().split(' ').join('-');
        return document.querySelector(`.${className}`).style.display = 'none';
    });
}

export default hideContents;
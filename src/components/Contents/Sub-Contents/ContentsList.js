import React from 'react';
import { Link } from 'react-scroll';

const ContentsList = (props) => {

    const showPlayArea = () => {
        const getPlayArea = document.querySelector('.play-area');
        getPlayArea.style.display = 'block';
    }


    const setActiveContent = (index) => {
        const contentNameComponent = document.querySelectorAll('.content');
        const contentName = contentNameComponent[index - 1].childNodes[0].textContent;
        for (var i = 0; i < contentNameComponent.length; i++) {
            contentNameComponent[i].className = contentNameComponent[i].className.replace(' activeContent', '');
        }
        document.title = `Pi/2 | ${contentName}`;
        contentNameComponent[index - 1].className += ' activeContent';
    }

    return (
        <>
            <div className="contents-list">
                <ul>
                    {props.foundContents && props.foundContents.length > 0 ? (
                        props.foundContents.map((content) => (
                            <Link
                                key={content.index}
                                onClick={showPlayArea}
                                to="play-area"
                                smooth={true}
                                duration={1000}
                            >
                                <li
                                    className="content"
                                    onClick={() => setActiveContent(content.index)}
                                >
                                    <span className="content-name">{content.name}</span>
                                </li>
                            </Link>
                        ))
                    ) : (
                        <h1>No results found!</h1>
                    )}
                </ul>
            </div>
        </>
    );
}

export default ContentsList;
import React from 'react';
import { Link } from 'react-scroll';

const ContentsList = (props) => {

    const showPlayArea = () => {
        const getPlayArea = document.querySelector('.play-area');
        getPlayArea.style.display = 'block';
    }

    return (
        <>
            <div className="contents-list">
                <ul>
                    {props.foundContents && props.foundContents.length > 0 ? (
                        props.foundContents.map((content) => (
                            <Link
                                key={content.id}
                                onClick={showPlayArea}
                                to="play-area"
                                smooth={true}
                                duration={1000}
                            >
                                <li className="content">
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
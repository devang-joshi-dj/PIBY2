import React from 'react';
import { Link } from 'react-scroll';

const ContentsList = (props) => {
    return (
        <>
            <div className="contents-list">
                <ul>
                    {props.foundContents && props.foundContents.length > 0 ? (
                        props.foundContents.map((user) => (
                            <Link
                                to="play-area"
                                smooth={true}
                                duration={1000}
                            >
                                <li key={user.id} className="content">
                                    <span className="content-name">{user.name}</span>
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
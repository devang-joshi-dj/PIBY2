import React from 'react';

const ContentsList = (props) => {
    return (
        <>
            <div className="contents-list">
                <ul>
                    {props.foundContents && props.foundContents.length > 0 ? (
                        props.foundContents.map((user) => (
                            <li key={user.id} className="content">
                                <span className="content-name">{user.name}</span>
                            </li>
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
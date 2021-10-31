import React, { useState } from 'react';

import './contents.css';

const USERS = [
    { id: 1, name: 'Sets' },
    { id: 2, name: 'Matrices' },
    { id: 3, name: 'Mensuration' },
    { id: 4, name: 'Probability' },
    { id: 5, name: 'Functions' },
    { id: 6, name: 'Permutations and Combinations' },
];

const Contents = () => {
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(USERS);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(USERS);
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    return (
        <div className="contents">
            <input
                type="search"
                value={name}
                onChange={filter}
                className="searchBar"
                placeholder="Search..."
            />

            <div className="contents-list">
                <ul>
                    {foundUsers && foundUsers.length > 0 ? (
                        foundUsers.map((user) => (
                            <li key={user.id} className="content">
                                <span className="content-name">{user.name}</span>
                            </li>
                        ))
                    ) : (
                        <h1>No results found!</h1>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Contents;
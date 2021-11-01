import React, { useState, useRef, useEffect } from 'react';
import './contents.css';
import SearchBar from './Sub-Contents/SearchBar';
import ContentsList from './Sub-Contents/ContentsList';

const CONTENTS = [
    { id: 1, name: 'Sets' },
    { id: 2, name: 'Matrices' },
    { id: 3, name: 'Mensuration' },
    { id: 4, name: 'Probability' },
    { id: 5, name: 'Functions' },
    { id: 6, name: 'Permutations and Combinations' },
];

const Contents = () => {
    const [name, setName] = useState('');
    const [foundContents, setFoundContents] = useState(CONTENTS);
    const searchBar = useRef(null);

    useEffect(() => {
        searchBar.current.focus();
    }, [])

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = CONTENTS.filter((user) => {
                return user.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundContents(results);
        } else {
            setFoundContents(CONTENTS);
        }

        setName(keyword);
    };

    return (
        <>
            <div className="contents">
                <SearchBar
                    name={name}
                    filter={filter}
                    searchBar={searchBar}
                />
                <ContentsList
                    foundContents={foundContents}
                />
            </div>
        </>
    );
}

export default Contents;
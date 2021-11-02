import React, { useState } from 'react';
import './contents.css';
import { CONTENTS } from './contents.json';
import Heading from '../Miscs/Heading/Heading';
import SearchBar from './Sub-Contents/SearchBar';
import ContentsList from './Sub-Contents/ContentsList';

const Contents = () => {
    const [name, setName] = useState('');
    const [foundContents, setFoundContents] = useState(CONTENTS);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = CONTENTS.filter((content) => {
                const contentTagsCheck = content.tags.filter((tag) => {
                    return tag.toLowerCase().includes(keyword.toLowerCase());
                });
                return contentTagsCheck.length === 0 ? false : true;
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
                <Heading>PIBY2</Heading>
                <SearchBar
                    name={name}
                    filter={filter}
                />
                <ContentsList
                    foundContents={foundContents}
                />
            </div>
        </>
    );
}

export default Contents;
import React, { useState } from 'react';
import './contents.css';
import { CONTENTS } from './contents.json';
import Heading from '../../Miscs/Heading/Heading';
import SearchBar from './SubContents/SearchBar';
import ContentsList from './SubContents/ContentsList';

const Contents = props => {
    const [name, setName] = useState('');
    const [foundContents, setFoundContents] = useState(CONTENTS);

    const filter = (e) => {
        // function for filtering Content List according the value in Search Bar
        const keyword = e.target.value;
        let results;
        return (keyword !== '') ?
            (
                results = CONTENTS.filter((content) => {
                    const contentTagsCheck = content.tags.filter((tag) => {
                        return tag.toLowerCase().includes(keyword.toLowerCase());
                    });
                    return contentTagsCheck.length === 0 ? false : true;
                }),
                setName(keyword),
                setFoundContents(results)
            )
            :
            (
                setName(keyword),
                setFoundContents(CONTENTS)
            );

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
                    {...props}
                />
            </div>
        </>
    );
}

export default Contents;
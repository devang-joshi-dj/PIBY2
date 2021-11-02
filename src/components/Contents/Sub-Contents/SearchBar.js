import React, { useRef, useEffect } from 'react';


const SearchBar = (props) => {
    const searchBar = useRef(null);

    useEffect(() => {
        searchBar.current.focus();
    }, []);

    return (
        <>
            <input
                type="search"
                value={props.name}
                onChange={props.filter}
                ref={searchBar}
                className="searchBar"
                placeholder="Search..."
            />
        </>
    );
}

export default SearchBar;
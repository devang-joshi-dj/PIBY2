import React from 'react';

const SearchBar = (props) => {
    return (
        <>
            <input
                type="search"
                value={props.name}
                onChange={props.filter}
                ref={props.searchBar}
                className="searchBar"
                placeholder="Search..."
            />
        </>
    );
}

export default SearchBar;
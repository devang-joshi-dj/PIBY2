import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const SearchBar = (props) => {
    const searchBar = useRef(null);
    const config = { mass: 10, tension: 1500, friction: 500 };
    const fadeAnimation = useSpring({
        from: {
            opacity: 0,
            transform: "translate(-100vh,0)"
        },
        to: {
            opacity: 1,
            transform: "translate(0,0)"
        },
        config
    });

    useEffect(() => {
        searchBar.current.focus();
    }, []);

    return (
        <>
            <animated.input
                style={fadeAnimation}
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
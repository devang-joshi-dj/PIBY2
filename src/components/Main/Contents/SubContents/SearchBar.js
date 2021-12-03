import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const SearchBar = props => {
    const searchBar = useRef(null);

    // for animation
    const config = { mass: 10, tension: 1500, friction: 500, };
    const slideFadeAnimation = useSpring({
        from: {
            opacity: 0,
            transform: "translate(-100vh,0)"
        },
        to: {
            opacity: 1,
            transform: "translate(0,0)"
        },
        config,
    });

    useEffect(() => {
        // function to put searchBar into focus on page load
        searchBar.current.focus();
    }, []);

    return (
        <>
            <animated.input
                style={slideFadeAnimation}
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
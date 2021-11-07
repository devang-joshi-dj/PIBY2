import React from 'react';
import hideContents from '../../Miscs/hideContents';
import { Link } from 'react-scroll';
import { useTrail, animated } from 'react-spring';

const ContentsList = (props) => {

    const showPlayArea = () => {
        const getPlayArea = document.querySelector('.play-area');
        getPlayArea.style.display = 'block';
    }

    const setActiveContent = (index) => {
        const contentNameComponent = document.querySelectorAll('.content');
        const contentName = contentNameComponent[index - 1].childNodes[0].textContent;

        // setting the active class to the clicked button
        for (var i = 0; i < contentNameComponent.length; i++) {
            contentNameComponent[i].className = contentNameComponent[i].className.replace(' activeContent', '');
        }
        contentNameComponent[index - 1].className += ' activeContent';

        // setting title according to the button clicked
        document.title = `Pi/2 | ${contentName}`;

        // setting all play-area children style to display:none
        hideContents();

        // setting desired play-area children style to display:block
        const currentClassName = contentName.toLowerCase().trim().split(' ').join('-');
        document.querySelector('.' + currentClassName).style.display = 'block';
    }

    const config = { mass: 10, tension: 1500, friction: 200, };
    const slideFadeAnimation = useTrail(props.foundContents.length, {
        from: {
            opacity: 0,
            transform: "translate(-100vh,0)",
        },
        to: {
            opacity: 1,
            transform: "translate(0,0)",
        },
        config,
    });

    return (
        <>
            <div className="contents-list">
                <ul>
                    {props.foundContents && props.foundContents.length > 0 ? (
                        slideFadeAnimation.map((spring, index) => {
                            return (
                                <animated.div
                                    key={index}
                                    style={{ ...spring }}
                                >
                                    <Link
                                        onClick={showPlayArea}
                                        to="play-area"
                                        smooth={true}
                                        duration={1000}
                                    >
                                        <li
                                            className="content"
                                            onClick={() => setActiveContent(props.foundContents[index].index)}
                                        >
                                            <span className="content-name">{props.foundContents[index].name}</span>
                                        </li>
                                    </Link>
                                </animated.div>
                            )
                        })
                    ) : (
                        <h1>No results found!</h1>
                    )
                    }
                </ul >
            </div >
        </>
    );
}

export default ContentsList;
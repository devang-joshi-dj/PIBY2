import React from 'react';
import { useTrail, animated } from 'react-spring';

const ContentsList = props => {

    const handleContentChange = (contentName) => {
        // function to be executed when any content is clicked

        // setting setDisplaySubPlayArea to content that is clicked
        props.setDisplaySubPlayArea(contentName);

        // getting contentNameComponent
        const contentNameComponent = document.querySelectorAll('.content');

        // getting value of content which is clicked
        const mappedData = [...contentNameComponent].map((contentNameSubComponent) => {
            const textContent = contentNameSubComponent.childNodes[0].textContent;
            return textContent === contentName ?
                textContent :
                null;
        });

        // getting index of content which is clicked and then geting the textContent
        const index = mappedData.indexOf(contentName);
        const contentNameTextContent = contentNameComponent[index].childNodes[0].textContent;

        // setting the active class to the clicked button
        for (var i = 0; i < contentNameComponent.length; i++) {
            contentNameComponent[i].className = contentNameComponent[i].className.replace(' activeContent', '');
            if (i === index)
                contentNameComponent[i].className += ' activeContent';
        }

        // setting title according to the button clicked
        document.title = `${contentNameTextContent} | Pi/2`;
    }

    // for animation
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
                                    <li
                                        className="content"
                                        onClick={() => handleContentChange(props.foundContents[index].name)}
                                    >
                                        <span className="content-name">{props.foundContents[index].name}</span>
                                    </li>
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
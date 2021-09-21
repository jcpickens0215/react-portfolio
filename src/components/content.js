import React from 'react';

export default function Content (props) {


    return (
        <>
            {props.page === 'Home' &&
                <p>We are Home!</p>
            }
            {props.page === 'Work' &&
                <p>We are at Work!</p>
            }
            {props.page === 'Contact' &&
                <p>Contact Me!</p>
            }
            {props.page === 'Resume' &&
                <p>Please hire me!</p>
            }
        </>
    );
}
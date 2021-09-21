import React from 'react';

export default function Header (props) {

    function handlePageChange(newPage) {
        props.setPage(newPage);
    }

    return (
        <>
        <h1>Justin Pickens</h1>
        <nav>
            <ul>
                <li>
                    <button onClick={() => handlePageChange('Home')}>About Me</button>
                </li>
                <li>
                    <button onClick={() => handlePageChange('Work')}>My Work</button>
                </li>
                <li>
                    <button onClick={() => handlePageChange('Contact')}>Contact Me</button>
                </li>
                <li>
                    <button onClick={() => handlePageChange('Resume')}>Resume</button>
                </li>
            </ul>
        </nav>
        </>
    );
}
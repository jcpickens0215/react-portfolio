import React from 'react';

export default function Header (props) {

    function handlePageChange(newPage) {
        props.setPage(newPage);
    }

    return (
        <header>
            <h1>Justin Pickens</h1>
            <nav>
                <ul className="mb-0 ps-0">
                    <li>
                        <button 
                        className={ props.page === 'Home'? 'selected':'' }
                        onClick={() => handlePageChange('Home')}>About Me</button>
                    </li>
                    <li>
                        
                        <button
                        className={ props.page === 'Work'? 'selected':'' }
                        onClick={() => handlePageChange('Work')}>My Work</button>
                    </li>
                    <li>
                        <button
                        className={ props.page === 'Contact'? 'selected':'' }
                        onClick={() => handlePageChange('Contact')}>Contact Me</button>
                    </li>
                    <li>
                        <button
                        className={ props.page === 'Resume'? 'selected':'' }
                        onClick={() => handlePageChange('Resume')}>Resume</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
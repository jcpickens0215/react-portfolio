import React from 'react';

export default function Footer () {

    return (
        <footer className="contactInfo fixed-bottom" id="Contact">
            <ul>
                {/*Social links etc*/}
                <li>
                    <h4>My Online Presence</h4>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/justin-pickens-34152049/"
                        target="_blank"
                        rel="noreferrer"
                        >@ LinkedIn</a>
                </li>
                <li>
                    <a
                        href="https://github.com/jcpickens0215"
                        target="_blank"
                        rel="noreferrer"
                        >@ GitHub</a>
                </li>
            </ul>
        </footer>
    );
}
import React from 'react';

export default function Footer () {

    return (
        <footer class="contactInfo" id="Contact">
            <h2>Contact Me</h2>
            <ul>
                <li>
                    <h4 style={{marginTop: 0}}>
                        <a href="./assets/files/Resume.pdf" target="_blank">My Resume</a>
                    </h4>
                </li>

                <li>
                    <h4>Phone</h4>
                </li>
                <li>(682) 268-1433‬</li>

                <li>
                    <h4>E-mail</h4>
                </li>
                <li>justin.pickens.1994@gmail.com</li>

                {/*Social links etc*/}
                <li>
                    <h4>Online</h4>
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
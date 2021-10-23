import React from 'react';
import Project from './project';
import ProjectList from '../project_list';
import Contact from './contact';

export default function Content (props) {


    return (
        <main>
            {props.page === 'Home' &&
                <section className="heroBanner" id="About">
                    <div>
                        <img src="./images/Me.jpg" alt="" />
                    </div>
                    <article id="bio">
                        <p>Hi, I'm Justin! I'm a Full Stack developer, currently working on increasing my skills.
                        </p>
                        <p>Some of the major technologies I use frequently are: HTML, CSS, JS, Node.js, Express.js,
                            MySQL, Sequelize, and Handlebars.
                        </p>
                        <p>Please feel free to check out some of my deployed apps, under the "My Work" tab.
                        </p>
                    </article>
                </section>
            }
            {props.page === 'Work' &&
                <>
                    <h2>My Work</h2>
                    <section>
                        {ProjectList.map( (element, index) => {
                            return (
                                <Project
                                    projectTitle={element.projectTitle}
                                    isPrimary={element.isPrimary}
                                    projectGithub={element.projectGithub}
                                    projectDeployed={element.projectDeployed}
                                    projectScreenshot={element.projectScreenshot}
                                    projectScreenshotDesc={element.projectScreenshotDesc}
                                    key={index}
                                />
                            )
                        })}
                    </section>
                </>
            }
            {props.page === 'Contact' &&
                <>
                    <h2>Contact Me</h2>
                    <ul className="contact">
                        <li>
                            <h4>Phone</h4>
                        </li>
                        <li>(682) 268-1433‬</li>

                        <li>
                            <h4>E-mail</h4>
                        </li>
                        <li>justin.pickens.1994@gmail.com</li>
                    </ul>
                    <Contact />
                </>
            }
            {props.page === 'Resume' &&
                <>
                    <h2>Skills</h2>
                    <h4 style={{marginTop: 0}}>
                        <a href="./files/Resume_2021-10-21.pdf" target="_blank">My Resume</a>
                    </h4>
                </>
            }
        </main>
    );
}
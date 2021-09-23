import React from 'react';
import Project from './project';
import ProjectList from '../project_list';

export default function Content (props) {


    return (
        <main>
            {props.page === 'Home' &&
                <section class="heroBanner" id="About">
                    <div>
                        <img src="./images/Me.jpg" alt="" />
                    </div>
                    <article id="bio">
                        <p>Hi, I'm Justin! I'm a Full Stack developer, currently working on increasing my skills.
                        </p>
                        <p>Some of the major technologies I use frequently are: HTML, CSS, JS, Node.js, Express.js,
                            MySQL, Sequelize, and Handlebars.
                        </p>
                        <p>Please feel free to check out some of my deployed apps, listed below.
                        </p>
                    </article>
                </section>
            }
            {props.page === 'Work' &&
                <>
                    <h2>My Work</h2>
                    <section>
                        {ProjectList.map( (index) => {
                            return (
                                <Project
                                    projectTitle={index.projectTitle}
                                    isPrimary={index.isPrimary}
                                    projectGithub={index.projectGithub}
                                    projectDeployed={index.projectDeployed}
                                    projectScreenshot={index.projectScreenshot}
                                    projectScreenshotDesc={index.projectScreenshotDesc}
                                />
                            )
                        })}
                    </section>
                </>
            }
            {props.page === 'Contact' &&
                <p>Contact me!</p>
            }
            {props.page === 'Resume' &&
                <p>Please hire me!</p>
            }
        </main>
    );
}
import React, { useState, useEffect } from 'react';
import Project from './project';
import ProjectList from '../project_list';
import Contact from './contact';
import Skill from './skill';
import skillsList from '../skillsList';
import Modal from './modal';

export default function Content (props) {

    const [modalContent, setModalContent] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => setModalVisible(true);
    const dismissModal = () => setModalVisible(false);

    useEffect(() => {console.log("VISIBLE? ", modalVisible)}, [modalVisible]);

    return (
        <main>
            {props.page === 'Home' &&
                <section className="container heroBanner" id="About">
                    <div>
                        <img src="./images/Me.jpg" alt="" />
                    </div>
                    <article id="bio">
                        <p className="my-0">Hi, I'm Justin! I'm a Full Stack developer, currently working on increasing my skills.
                        </p>
                        <p className="my-0">Some of the major technologies I use frequently are: HTML, CSS, JS, Node.js, Express.js,
                            MySQL, Sequelize, and Handlebars.
                        </p>
                        <p className="my-0">Please feel free to check out some of my deployed apps, under the "My Work" tab.
                        </p>
                    </article>
                    <div className="spacer"></div>
                </section>
            }
            {props.page === 'Work' &&
                <>
                    <h2>My Work</h2>
                    <section className="container">
                        {ProjectList.map( (element, index) => {
                            return (
                                <Project
                                    showModal={showModal}
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
                        <Modal 
                            visible={modalVisible}
                            dismissModal={dismissModal}
                            modalcontent={modalContent}
                        />
                        <div className="spacer"></div>
                    </section>
                </>
            }
            {props.page === 'Contact' &&
                <>
                    <section className="container">
                        <h2>Contact Me</h2>
                        <ul className="contact">
                            <li>
                                <h4>Phone</h4>
                            </li>
                            <li>(682) 268-1433</li>

                            <li>
                                <h4>E-mail</h4>
                            </li>
                            <li>justin.pickens.1994@gmail.com</li>
                        </ul>
                        <Contact />
                        <div className="spacer"></div>
                    </section>
                </>
            }
            {props.page === 'Resume' &&
                <>
                    <h2 className="mb-1">Skills</h2>
                    <section className="container skills">
                        <div className="row mb-3 pt-0">
                            {skillsList.map((item) => {
                                return (
                                    <Skill
                                        iconSource={item.iconSource}
                                        iconName={item.iconName}
                                    />
                                )
                            })}
                        </div>
                    </section>
                    <h4 style={{marginTop: 0}}>
                        <a href="./files/Resume_2021-10-21.pdf" target="_blank">My Resume</a>
                    </h4>
                    <div className="spacer"></div>
                </>
            }
        </main>
    );
}
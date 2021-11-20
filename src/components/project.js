import React from 'react';

export default function Project(props) {

    // Make props more legible
    const projectData = props;

    // Define card style dependent on isPrimary
    const headerStyle = projectData.isPrimary?
        { // Yep
            classList: "mycard shiny topleft",
            styleMod: { marginTop: 0 },
        }
        :
        { // Nope
            classList: "mycard topleft",
            styleMod: {},
        };

    /*
    Props:
        isPrimary - top of page
        projectTitle - Name of project
        projectGithub - project repository
        projectDeployed - demo of project
        projectScreenshot - src of project screenshot
        projectScreenshotDesc - alt text
    */

    return (
        <>
            <div className={headerStyle.classList} style={headerStyle.styleMod}>
                <div className="cardHeader">
                    <h3>{projectData.projectTitle}</h3>
                    <a
                        href={projectData.projectGithub}
                        target="_blank"
                        rel="noreferrer"
                    >Github Repo</a>
                </div>
                <i onClick={props.showModal}>
                    <p className="detailsText">Click for more details</p>
                    <img src={projectData.projectScreenshot}
                        alt={projectData.projectScreenshotDesc}
                    />
                </i>
            </div>
        </>
    );
}
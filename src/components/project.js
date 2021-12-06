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

    const doOnClick = () => {
        console.log("Click!", props);
        props.showModal();
        props.handleProjectContent(props.index);
    }
    /*
    Props:
        index - Have to use in place of key, because key is inaccessible
        isPrimary - top of page / make larger
        projectTitle - Name of project
        projectDeployed - demo of project
        projectScreenshot - src of project screenshot
        showModal - Toggles Modal
        handleModalContent - sets relevant display content for modal
    */

    return (
        <>
            <div className={headerStyle.classList} style={headerStyle.styleMod}>
                <div className="cardHeader">
                    <h3>{projectData.projectTitle}</h3>
                    <a
                        href={projectData.projectDeployed}
                        target="_blank"
                        rel="noreferrer"
                    >Deployed App</a>
                </div>
                <i onClick={doOnClick}>
                    <p className="detailsText">Click for more details</p>
                    <img src={projectData.projectScreenshot}
                        alt={projectData.projectTitle}
                    />
                </i>
            </div>
        </>
    );
}
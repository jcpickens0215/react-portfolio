import React from 'react';

export default function Modal (props) {

    const content = props.modalcontent;

    return (
        <>
        { props.visible ?
            (
                <div className="modal" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="projectModalLabel">{content.projectTitle}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={props.dismissModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    <a
                                        href={content.projectGithub}
                                        target="_blank"
                                        rel="noreferrer"
                                    >Project GitHub Repo</a>
                                </p>
                                <p>
                                    <a
                                        href={content.projectDeployed}
                                        target="_blank"
                                        rel="noreferrer"
                                    >Deployed App</a>
                                </p>
                                <p>{content.projectDescription}</p>
                                <p>{content.projectTech}</p>
                                <p>{content.projectAuth}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )
        }
        </>
    );
}
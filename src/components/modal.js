import React from 'react';

export default function Modal (props) {

    const content = props.modalcontent;

    return (
        <>
        { props.visible ?
            (
                <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{content.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={props.dismissModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>{content.body}</p>
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
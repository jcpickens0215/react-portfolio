import React from 'react';

export default function Modal (props) {

    return (
        <>
        { props.visible ?
            (
                <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={props.dismissModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                ...
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
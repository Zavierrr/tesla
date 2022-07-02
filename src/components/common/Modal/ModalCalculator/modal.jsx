import React, { useState, useEffect } from "react";
import './modal.css'

const Modal = (props) => {
    const [visible, setVisible] = useState(false)
    const { visible: show, children, title, onClose } = props;

    useEffect(() => {
        setVisible(show)
    }, [show])

    const maskClick = () => {
        setVisible(false)
        onClose && onClose()
    }

    return (
        visible && <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-title">{title}</div>
                <div className="modal-content">{children}</div>
            </div>
            <div className="mask" onClick={maskClick}></div>
        </div>
    )
}

export default Modal;
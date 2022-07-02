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
        visible && <div className="modal1-wrapper">
            <div className="modal1">
                <div className="modal1-title">{title}</div>
                <div className="modal1-content">{children}</div>
            </div>
            <div className="mask" onClick={maskClick}></div>
        </div>
    )
}

export default Modal;
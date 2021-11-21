import React from "react";
import "./Modal.css"
import {showFavouritesModal} from "../../actions";
import {useDispatch} from "react-redux";

const Modal = () => {
    const dispatch = useDispatch()

    const handleHideFavouritesClick = () => {
        dispatch(showFavouritesModal(false))
    }

    return (
        <div className="Modal">
            <div className="ModalContent">
                <span className="Close" onClick={handleHideFavouritesClick}>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    )
}

export default Modal

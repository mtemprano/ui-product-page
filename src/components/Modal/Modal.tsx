import React from "react";
import "./Modal.css"
import {showFavouritesModal} from "../../actions";
import {useDispatch} from "react-redux";
import {ProductList} from "../";

const Modal = () => {
    const dispatch = useDispatch()

    const handleHideFavouritesClick = () => {
        dispatch(showFavouritesModal(false))
    }

    return (
        <div className="Modal">
            <div className="ModalContent">
                <span className="Close" onClick={handleHideFavouritesClick}>&times;</span>
                <ProductList isSimplified={true} isFavourites={true} />
            </div>
        </div>
    )
}

export default Modal

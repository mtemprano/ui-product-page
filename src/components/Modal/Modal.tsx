import React from "react";
import "./Modal.css"
import {changeFavouritesSearchText, showFavouritesModal} from "../../actions";
import {useDispatch} from "react-redux";
import {ProductList} from "../";
import SearchBar from "../TopSection/SearchBar/SearchBar";

const Modal = () => {
    const dispatch = useDispatch()

    const handleHideFavouritesClick = () => {
        dispatch(showFavouritesModal(false))
        dispatch(changeFavouritesSearchText(''))
    }

    return (
        <div className="Modal">
            <div className="ModalContent">
                <div className="ModalTopSection">
                    <SearchBar isFavourites={true} />
                    <span className="Close" onClick={handleHideFavouritesClick}>&times;</span>
                </div>
                <ProductList isSimplified={true} isFavourites={true} />
            </div>
        </div>
    )
}

export default Modal

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import SearchBar from "../SearchBar/SearchBar";
import "./TopSection.css"

const TopSection = () => {
    const handleOnSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
    }

    return (
        <div className="TopSection">
            <SearchBar />
            <div>
                <select name="sortBy" onChange={handleOnSortChange}>
                    <option value="">Sort by</option>
                    <option value="Title">Title</option>
                    <option value="Description">Description</option>
                    <option value="Price">Price</option>
                    <option value="Email">Email</option>
                </select>
                <button type="button">Show favourites</button>
            </div>
        </div>
    )
}

TopSection.propTypes = {}

TopSection.defaultProps = {}

export default TopSection

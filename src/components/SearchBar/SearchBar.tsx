import React, { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { debounce } from "debounce";
import "./SearchBar.css"

const SearchBar = () => {
  const dispatch = useDispatch()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const debouncedChangeHandler = debounce(handleOnChange, 300)

  return (
    <input
      onChange={debouncedChangeHandler}
      type="text"
      id="searchBox"
      name="searchBox"
      placeholder="Type a search..."
    />
  )
}

SearchBar.propTypes = {}

SearchBar.defaultProps = {}

export default SearchBar

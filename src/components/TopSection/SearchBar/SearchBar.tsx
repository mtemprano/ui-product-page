import React from "react"
import {useDispatch} from "react-redux"
import { debounce } from "debounce"
import {changeSearchText} from "../../../actions";
import "./SearchBar.css"

const SearchBar = () => {
  const dispatch = useDispatch()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchText(e.target.value))
  }
  const debouncedChangeHandler = debounce(handleOnChange, 300)

  return (
    <input
        className="SearchBar"
        onChange={debouncedChangeHandler}
        type="text"
        id="searchBox"
        name="searchBox"
        placeholder="Type to search..."
    />
  )
}

export default SearchBar;

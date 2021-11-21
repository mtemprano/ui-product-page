import React from "react"
import {useDispatch} from "react-redux"
import { debounce } from "debounce"
import classNames from "classnames";
import {changeFavouritesSearchText, changeSearchText} from "../../../actions";
import "./SearchBar.css"

type SearchBarProps = { isFavourites?: boolean };

const SearchBar = ({ isFavourites = false }: SearchBarProps): JSX.Element => {
  const dispatch = useDispatch()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isFavourites) dispatch(changeSearchText(e.target.value))
    else dispatch(changeFavouritesSearchText(e.target.value))
  }
  const debouncedChangeHandler = debounce(handleOnChange, 300)

  const dynamicClasses = classNames('SearchBar', { FavouritesSearchBar: isFavourites })

  return (
    <input
        className={dynamicClasses}
        onChange={debouncedChangeHandler}
        type="text"
        id="searchBox"
        name="searchBox"
        placeholder="Type to search..."
    />
  )
}

export default SearchBar;

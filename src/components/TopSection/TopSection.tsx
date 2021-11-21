import React from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchBar from "./SearchBar/SearchBar"
import { changeSortBy, changeSortTypeBy, showFavouritesModal } from "../../actions"
import { getChangeSortBy } from "../../selectors"
import "./TopSection.css"

export enum SortValues {
  None = "",
  Title = "title",
  Description = "description",
  Price = "price",
  Email = "email",
}

export enum SortType {
  Asc = "Asc",
  Desc = "Desc",
}

const TopSection = (): JSX.Element => {
  const dispatch = useDispatch()
  const sortBy = useSelector(getChangeSortBy)

  const handleOnSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSortBy(e.target.value))
  }

  const handleOnSortTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSortTypeBy(e.target.value))
  }

  const handleShowFavouritesClick = () => {
    dispatch(showFavouritesModal(true))
  }

  return (
    <div className="TopSection">
      <div className="TopSectionWrapper">
        <SearchBar />
        <div className="SubSection">
          {sortBy && (
            <select className="item" name="sortType" onChange={handleOnSortTypeChange} data-testid="sortType-selector">
              <option value={SortType.Asc}>Asc</option>
              <option value={SortType.Desc}>Desc</option>
            </select>
          )}
          <select className="item" name="sortBy" onChange={handleOnSortChange} data-testid="sortBy-selector">
            <option value={SortValues.None}>Sort by</option>
            <option value={SortValues.Title}>Title</option>
            <option value={SortValues.Description}>Description</option>
            <option value={SortValues.Price}>Price</option>
            <option value={SortValues.Email}>Email</option>
          </select>
          <button className="item" type="button" onClick={handleShowFavouritesClick} data-testid="show-favourites-button">
            Show favourites
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopSection

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import classNames from "classnames";
import { getPaginationIndex, getFilteredPageItems } from "../../selectors"
import { changePaginationIndex } from "../../actions"
import { PRODUCTS_PER_PAGE } from "../../constants"
import "./PaginationBar.css"

const PaginationBar = () => {
  const dispatch = useDispatch()
  const currentPaginationIndex = useSelector(getPaginationIndex)
  const filteredPageItems = useSelector(getFilteredPageItems)

  const currentPage = Number(currentPaginationIndex)
  const pageNumbersAmount = Math.ceil(filteredPageItems.length / PRODUCTS_PER_PAGE)

  const setPage = (pageNumber: number) => {
    dispatch(changePaginationIndex(pageNumber))
  }

  const pageUp = () => {
    if (currentPage < pageNumbersAmount) setPage(currentPage + 1)
  }

  const pageDown = () => {
    if (currentPage > 1) setPage(Number(currentPaginationIndex) - 1)
  }

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    type: string,
    iterator?: number,
  ) => {
    if (e.key === "Enter") {
      if (type === "numberIcon" && iterator) setPage(iterator)
      if (type === "pageDown") pageDown()
      if (type === "pageUp") pageUp()
    }
  }

  const getPageNumbers = () => {
    const pageNumbers = []

    for (let iterator = 1; iterator <= pageNumbersAmount; iterator += 1) {
      const dynamicClasses = classNames('PageNumber', { SelectedPageNumber: iterator === currentPaginationIndex })

      pageNumbers.push(
        <span
          className={dynamicClasses}
          data-testid="page-number"
          key={`${iterator}_pageNumber`}
          onClick={() => setPage(iterator)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => handleKeyPress(e, "numberIcon", iterator)}
        >
          {iterator}
        </span>,
      )
    }
    return pageNumbers
  }

  return (
    <div className="PaginationBar">
      <span
        className="PaginationArrow"
        onClick={pageDown}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => handleKeyPress(e, "pageDown")}
      >
        &#10096;
      </span>
      <div className="PageNumbersContainer">{getPageNumbers()}</div>
      <span
        className="PaginationArrow"
        onClick={pageUp}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => handleKeyPress(e, "pageUp")}
      >
        &#10097;
      </span>
    </div>
  )
}

export default PaginationBar

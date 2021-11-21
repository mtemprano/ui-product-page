import React from "react"
import { useSelector } from "react-redux"
import ListItem from "./ListItem/ListItem"
import { getPaginationIndex, getFilteredPageItems, getFilteredFavourites } from "../../selectors"
import { ExtendedProductListItem } from "../../helpers"
import { PRODUCTS_PER_PAGE } from "../../constants"
import "./ProductList.css"
import classNames from "classnames"

type ProductListProps = { isSimplified?: boolean; isFavourites?: boolean }

const ProductList = ({
  isSimplified = false,
  isFavourites = false,
}: ProductListProps): JSX.Element => {
  const filteredPageItems = useSelector(getFilteredPageItems)
  const filteredFavouritesList = useSelector(getFilteredFavourites)
  const paginationIndex = useSelector(getPaginationIndex)

  const filteredPageItemsAmount = filteredPageItems.length

  const getProductList = () => {
    let lastIndex = paginationIndex * PRODUCTS_PER_PAGE
    const firstIndex = lastIndex - PRODUCTS_PER_PAGE
    if (lastIndex > filteredPageItemsAmount) lastIndex = filteredPageItemsAmount
    const displayableProducts = isFavourites
      ? filteredFavouritesList
      : filteredPageItems.slice(firstIndex, lastIndex)

    if (displayableProducts.length === 0) {
      return <h2>No elements found</h2>
    }
    return displayableProducts.map((properties: ExtendedProductListItem) => (
      <ListItem
        key={`${properties.title}_productName`}
        {...properties}
        isSimplified={isSimplified}
      />
    ))
  }

  const dynamicClasses = classNames(
    { ListWrapper: !isSimplified },
    { SimplifiedListWrapper: isSimplified },
  )

  return (
    <div className={dynamicClasses} data-testid="product-list">
      {getProductList()}
    </div>
  )
}

export default ProductList

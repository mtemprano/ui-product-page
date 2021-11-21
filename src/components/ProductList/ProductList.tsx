import React from "react"
import { useSelector } from "react-redux"
import ListItem from "./ListItem/ListItem"
import {getPaginationIndex, getFilteredPageItems, getFullFavouritesList} from "../../selectors"
import { ExtendedProductListItem } from "../../helpers"
import { PRODUCTS_PER_PAGE } from "../../constants"
import "./ProductList.css"
import classNames from "classnames";

type ProductListProps = { isSimplified?: boolean, isFavourites?: boolean };

const ProductList = ({ isSimplified = false, isFavourites = false } : ProductListProps) => {
  const filteredPageItems = useSelector(getFilteredPageItems)
  const fullFavouritesList = useSelector(getFullFavouritesList)
  const paginationIndex = useSelector(getPaginationIndex)

  const filteredPageItemsAmount = filteredPageItems.length

  const getProductList = () => {
    let lastIndex = paginationIndex * PRODUCTS_PER_PAGE
    const firstIndex = lastIndex - PRODUCTS_PER_PAGE
    if (lastIndex > filteredPageItemsAmount) lastIndex = filteredPageItemsAmount
    const displayableProducts = isFavourites ? fullFavouritesList : filteredPageItems.slice(firstIndex, lastIndex)

    return displayableProducts.map((properties: ExtendedProductListItem) => (
      <ListItem key={`${properties.title}_productName`} {...properties} isSimplified={isSimplified} />
    ))
  }

  const dynamicClasses = classNames({ ListWrapper: !isSimplified }, { SimplifiedListWrapper: isSimplified })

  return (
    <div className={dynamicClasses} data-testid="product-list">
      {getProductList()}
    </div>
  )
}

export default ProductList

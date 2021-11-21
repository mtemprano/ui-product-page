import React from "react"
import { useSelector } from "react-redux"
import ListItem from "./ListItem/ListItem"
import { getPaginationIndex, getFilteredPageItems } from "../../selectors"
import { ExtendedProductListItem } from "../../helpers"
import { PRODUCTS_PER_PAGE } from "../../constants"
import "./ProductList.css"

const ProductList = () => {
  const filteredPageItems = useSelector(getFilteredPageItems)
  const paginationIndex = useSelector(getPaginationIndex)

  const filteredPageItemsAmount = filteredPageItems.length

  const getProductList = () => {
    let lastIndex = paginationIndex * PRODUCTS_PER_PAGE
    const firstIndex = lastIndex - PRODUCTS_PER_PAGE
    if (lastIndex > filteredPageItemsAmount) lastIndex = filteredPageItemsAmount
    const displayableProducts = filteredPageItems.slice(firstIndex, lastIndex)

    return displayableProducts.map((properties: ExtendedProductListItem) => (
      <ListItem key={`${properties.title}_productName`} {...properties} />
    ))
  }

  return (
    <div className="ListWrapper" data-testid="product-list">
      {getProductList()}
    </div>
  )
}

ProductList.propTypes = {}

ProductList.defaultProps = {}

export default ProductList

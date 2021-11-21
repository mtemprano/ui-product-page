import { createSelector } from "reselect"
import getListItems from "./getListItems"
import getProductListSearch from "./getProductListSearch"
import getChangeSortBy from "./getChangeSortBy"
import type { ExtendedProductListItem } from "../helpers"
import { SortType, SortValues } from "../components/TopSection/TopSection"
import getChangeSortTypeBy from "./getChangeSortTypeBy"

export default createSelector(
  [getListItems, getProductListSearch, getChangeSortBy, getChangeSortTypeBy],
  (
    listItems: Array<ExtendedProductListItem> = [],
    productListSearch: string,
    sortBy: SortValues,
    sortTypeBy: SortType,
  ) => {
    const searchFilteredArray = listItems.filter(({ description, email, title, price }) => {
      const combinedString = `${description} ${email} ${title} ${price}`.toLowerCase()
      return combinedString.includes(productListSearch.toLowerCase())
    })

    const copyArray = JSON.parse(JSON.stringify(searchFilteredArray))
    if (sortBy) {
      if (sortBy === SortValues.Price) {
        copyArray.sort((a: ExtendedProductListItem, b: ExtendedProductListItem) => {
          if (Number(a[SortValues.Price]) > Number(b[SortValues.Price])) return 1
          if (Number(a[SortValues.Price]) < Number(b[SortValues.Price])) return -1
          return 0
        })
      } else {
        copyArray.sort((a: ExtendedProductListItem, b: ExtendedProductListItem) => {
          if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return 1
          if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return -1
          return 0
        })
      }

      if (sortTypeBy === SortType.Desc) {
        copyArray.reverse()
      }
    }
    return copyArray
  },
)

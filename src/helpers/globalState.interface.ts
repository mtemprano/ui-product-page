import { ExtendedProductListItem } from "./fetchItems"
import { SortValues, SortType } from "../components/TopSection/TopSection"

export interface GlobalStateInterface {
  productListSearch: string
  changeSortBy: SortValues
  changeSortTypeBy: SortType
  showFavouritesModal: boolean
  favourites: Array<string>
  favouritesSearchText: string
  paginationIndex: number
  productList: {
    loading: boolean
    data: Array<ExtendedProductListItem>
  }
}

import { GlobalStateInterface } from "../helpers"
import { SortType } from "../components/TopSection/TopSection"

export default (state: GlobalStateInterface): SortType => state.changeSortTypeBy

import {GlobalStateInterface} from "../helpers";
import {SortValues} from "../components/TopSection/TopSection";

export default (state: GlobalStateInterface): SortValues => state.changeSortBy

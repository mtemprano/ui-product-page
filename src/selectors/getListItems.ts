import {GlobalStateInterface} from "../helpers";
import {ExtendedProductListItem} from "../helpers";

export default (state: GlobalStateInterface): Array<ExtendedProductListItem> => state.productList.data

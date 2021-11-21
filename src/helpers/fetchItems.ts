const url = "https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json"
import { v4 as uuidv4 } from 'uuid';

interface ProductListItem {
  title: string
  description: string
  price: string
  email: string
  image: string
}

interface ResponseObj {
  items: Array<ProductListItem>
}

interface ExtendedProductListItem extends ProductListItem {
  id: string
  title: string
  description: string
  price: string
  email: string
  image: string
}

const fetchItems = (): Promise<Array<ExtendedProductListItem>> => {
  return fetch(url)
      .then((response) => response.json())
      .then((response: ResponseObj) => response.items.map((item) => ({...item, id: uuidv4() })))
}

export { fetchItems }
export type { ExtendedProductListItem }

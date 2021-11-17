const url = "https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json"

interface ProductListItem {
  title: string
  description: string
  price: string
  email: string
  image: string
}

const fetchItems = (): Promise<string> => {
  return fetch(url).then((response) => response.json())
}

export { fetchItems }
export type { ProductListItem }

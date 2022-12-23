import axios from "axios"

const create = axios.create()

export interface StoreListType {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const fetchStoreAPI = async () => {
  const REQUESTURL = "https://fakestoreapi.com/products"

  const response = await create.get<StoreListType>(REQUESTURL)

  return response
}

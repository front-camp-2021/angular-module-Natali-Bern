export interface ProductsResponseData {
    id: string
    images: string[],
    title: string
    rating: number
    price: number
    category: string
    brand: string
}

export type ProductsResponse = ProductsResponseData[]
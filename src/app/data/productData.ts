import { ProductsResponseData } from "../../dataapi/shemas.api"

interface ProductParams {
    id: string
    images: string[],
    title: string
    rating: number
    price: number
    category: string
    brand: string
}


export class Product {
    public id: string
    public images: string[]
    public title: string
    public rating: number
    public price: number
    public category: string
    public brand: string

  constructor(params: ProductParams) {
    this.id = params.id
    this.images = params.images
    this.title = params.title
    this.rating = params.rating
    this.price = params.price
    this.category = params.category
    this.brand = params.brand
  }

  public static fromResponse(data: ProductsResponseData): Product {
    return new Product(data)
  }
}
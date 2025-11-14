export interface Product{
    id: string,
    name: string,
    details: string,
    price: number,
    imageUrl: string,
    categorySlug: string
}

export interface Category{
    id: string,
    name: string,
    slug: string,
}
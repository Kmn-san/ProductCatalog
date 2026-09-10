import { Review } from "./Review";

export interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
    thumbnail: string;
    images: string[];
    stock: number;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    minimumOrderQuantity: number;
    brand: string;
    category: string;
    weight: number;
    dimensions: { width: number; height: number; depth: number };
    sku: number;
    reviews: Review[];
    description: string;
}

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
}
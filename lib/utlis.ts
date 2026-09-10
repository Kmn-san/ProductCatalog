export type discountePrice = {
    price: number;
    discountPercentage: number
}

export const discountePrice = ({ price, discountPercentage }: discountePrice) => {
    return price * (1 - discountPercentage / 100)
}
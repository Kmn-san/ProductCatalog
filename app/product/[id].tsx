import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native';
import ImageHeader from '../../components/detail/ImageHeader';
import PolicyInfo from '../../components/detail/PolicyInfo';
import PriceSection from '../../components/detail/PriceSection';
import ProductInfo from '../../components/detail/ProductInfo';
import ErrorState from '../../components/ErrorState';
import useProductDetail from '../../hooks/useProductDetail';

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    const { product, status } = useProductDetail(Number(id));

    if (!product) return <ErrorState />
    return (
        <ScrollView className="flex-1 bg-white">
            <ImageHeader images={product.images} />
            <PriceSection price={product.price} discountPercentage={product.discountPercentage} />
            <ProductInfo title={product.title} rating={product.rating} stock={product.stock} minimumOrderQuantity={product.minimumOrderQuantity} />
            <PolicyInfo returnPolicy={product.returnPolicy} shippingInfo={product.shippingInformation} warrantyInfomation={product.warrantyInformation} />
        </ScrollView>
    )
}
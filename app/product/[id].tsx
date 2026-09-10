import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageHeader from '../../components/detail/ImageHeader';
import PolicyInfo from '../../components/detail/PolicyInfo';
import PriceSection from '../../components/detail/PriceSection';
import ProductInfo from '../../components/detail/ProductInfo';
import ReviewSection from '../../components/detail/ReviewSection';
import StandardModal from '../../components/detail/StandardModal';
import ErrorState from '../../components/ErrorState';
import useProductDetail from '../../hooks/useProductDetail';

export default function ProductDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { product, status } = useProductDetail(Number(id));
    if (!product || status === "error") return <ErrorState />
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
            <ScrollView className="flex-1 bg-white">
                <ImageHeader images={product.images} />
                <PriceSection price={product.price} discountPercentage={product.discountPercentage} />
                <ProductInfo title={product.title} rating={product.rating} stock={product.stock} minimumOrderQuantity={product.minimumOrderQuantity} />
                <PolicyInfo returnPolicy={product.returnPolicy} shippingInfo={product.shippingInformation} warrantyInfomation={product.warrantyInformation} />
                <StandardModal brand={product.brand} category={product.category} dimensions={product.dimensions} sku={product.sku} weight={product.weight} />
                <ReviewSection reviews={product.reviews} />

                {/* DESCRIPTION */}
                <View className="px-4 mt-4 mb-8 border-t border-gray-100 pt-3">
                    <Text className="text-base font-semibold text-gray-900 mb-1">Description</Text>
                    <Text className="text-sm text-gray-600 leading-5">{product.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
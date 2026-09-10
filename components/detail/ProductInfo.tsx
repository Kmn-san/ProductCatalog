import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

type Props = {
    title: string;
    rating: number;
    stock: number;
    minimumOrderQuantity: number;
}
export default function ProductInfo({ title, rating, stock, minimumOrderQuantity }: Props) {
    return (
        <View className="px-4 mt-2">
            <Text className="text-xl font-semibold text-gray-900">
                {title}
            </Text>
            <View className="flex-row items-center justify-between mt-1">
                <View className="flex-row items-center">
                    <Ionicons name="star" size={16} color="#FBBF24" />
                    <Text className="text-sm text-gray-600 ml-1">
                        {rating.toFixed(1)}
                    </Text>
                </View>
                <Text className="text-sm text-gray-500">
                    {stock > 0 ? `${stock} left · Min.${minimumOrderQuantity}/order` : "Out of stock"}
                </Text>
            </View>
        </View>
    )
}
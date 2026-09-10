import { Text, View } from 'react-native';
import { discountePrice } from '../../lib/utlis';

export default function PriceSection({ price, discountPercentage }: discountePrice) {
    return (
        <View className="flex-row items-baseline px-4 mt-3">
            <Text className="text-2xl font-bold text-gray-900">
                RM {discountePrice({ price: price, discountPercentage: discountPercentage }).toFixed(2)}
            </Text>
            <Text className="text-base text-gray-400 line-through ml-2">
                RM {price.toFixed(2)}
            </Text>
            <Text className="text-sm text-green-600 ml-2">
                -{discountPercentage.toFixed(0)}%
            </Text>
        </View>
    )
}
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, Text, View } from 'react-native';

export default function ProductCard({ item }: any) {
    const discountedPrice = item.price * (1 - item.discountPercentage / 100)
    return (
        <View className="flex-1 m-2">
            <Pressable
                className=" bg-white rounded-xl p-3 shadow-sm"
            >
                {/* PRODUCT IMAGE */}
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{ width: '100%', height: 120, borderRadius: 8 }}
                />
                <View className="flex-1 ml-3 justify-between">
                    {/* PRODUCT NAME */}
                    <Text
                        className="text-base font-semibold text-gray-900 mt-2"
                        numberOfLines={2}
                    >
                        {item.title}
                    </Text>

                    {/* PRODUCT PRICE DISCOUNTED + RATE*/}
                    <View className="flex-row items-center justify-between mt-1">
                        <Text className="text-lg font-bold text-gray-900">
                            RM{discountedPrice.toFixed(2)}
                        </Text>

                        <View className="flex-row items-center">
                            <Ionicons name="star" size={14} color="#FBBF24" />
                            <Text className="text-sm text-gray-600 ml-1">
                                {item.rating.toFixed(1)}
                            </Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
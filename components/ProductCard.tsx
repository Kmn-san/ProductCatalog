import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { discountePrice } from '../lib/utlis';

function ProductCard({ item }: any) {
    return (
        <View className="flex-1 m-2">
            <Pressable
                className=" bg-white rounded-xl p-3 shadow-sm"
                onPress={() => router.push({
                    pathname: `/product/[id]`,
                    params: { id: item.id }
                })}
            >
                {/* PRODUCT IMAGE */}
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{ width: '100%', height: 120, borderRadius: 8 }}
                    resizeMode="cover"
                />
                <View className="ml-3 mt-2">
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
                            RM {discountePrice({ price: item.price, discountPercentage: item.discountPercentage }).toFixed(2)}
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
        </View >
    )
}
// memo record the ui for ui performance(by id of the item)
export default React.memo(ProductCard);
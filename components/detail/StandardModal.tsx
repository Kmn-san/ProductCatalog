import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

type Props = {
    brand: string;
    category: string;
    weight: number;
    dimensions: { width: number; height: number; depth: number };
    sku: number;
}

function StandardRow({ label, value }: { label: string, value: string }) {
    return (
        <View className="flex-row justify-between py-2 border-b border-gray-50">
            <Text className="text-sm text-gray-500">
                {label}
            </Text>
            <Text className="text-sm text-gray-900">
                {value}
            </Text>
        </View>
    )
}

export default function StandardModal({ brand, category, weight, dimensions, sku }: Props) {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Pressable
                onPress={() => setVisible(true)}
                className="flex-row items-center justify-between px-4 py-3 mt-2 border-t border-gray-100"
            >
                <Text className="text-base text-gray-900">
                    Product Standard
                </Text>
                <Ionicons name='chevron-forward' size={18} color="#9CA3AF" />
            </Pressable>

            <Modal visible={visible} animationType="slide" transparent>
                <View className="flex-1 justify-end bg-black/40">
                    <View className="bg-white rounded-t-2xl p-5">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-lg font-semibold">
                                Product Standard
                            </Text>
                            <Pressable onPress={() => setVisible(false)}>
                                <Ionicons name="close" size={24} color="black" />
                            </Pressable>
                        </View>

                        <StandardRow label='Brand' value={brand ?? 'N/A'} />
                        <StandardRow label='Category' value={category} />
                        <StandardRow label='Weight' value={`${weight} g`} />
                        <StandardRow label='Dimensions' value={`${dimensions.width} x ${dimensions.height} x ${dimensions.depth} cm`} />
                        <StandardRow label='SKU' value={`${sku} `} />
                    </View>
                </View>
            </Modal>
        </>
    )
}


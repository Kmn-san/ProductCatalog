import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, TextInput, View } from 'react-native';

type Props = {
    value: string;
    onChangeText: (text: string) => void;
}

export default function SearchBar({ value, onChangeText }: Props) {
    return (
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mx-4 my-3">
            <Ionicons name="search" size={18} color="#9CA3AF" />

            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Search products"
                placeholderTextColor="#9CA3AF"
                className="flex-1 ml-2 text-base text-gray-900"
                returnKeyType='search'
                autoCorrect={false}
                clearButtonMode='never'
            />
            {value.length > 0 && (
                <Pressable onPress={() => onChangeText('')} hitSlop={8}>
                    <Ionicons name="close-circle" size={18} color="#9CA3AF" />
                </Pressable>
            )}
        </View>

    )
}
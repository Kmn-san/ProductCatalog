import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import useProductDetail from '../../hooks/useProductDetail';

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    const { product, status } = useProductDetail(id);
    return (
        <View>
            <Text>ProductDetial</Text>
        </View>
    )
}
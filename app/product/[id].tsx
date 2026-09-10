import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProductDetial() {
    const { id } = useLocalSearchParams();
    console.log(id);

    return (
        <View>
            <Text>ProductDetial</Text>
        </View>
    )
}
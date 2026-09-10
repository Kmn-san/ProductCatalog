import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

type Props = {
    returnPolicy: string;
    shippingInfo: string;
    warrantyInfomation: string;
}

function PolicyRow({ icon, text }: { icon: any, text: string }) {
    return (
        <View className="flex-row items-center py-2">
            <Ionicons name={icon} size={18} color="#6B7280" />
            <Text className="text-sm text-gray-600 ml-2 flex-1">
                {text}
            </Text>
        </View>
    )
}

export default function PolicyInfo({ returnPolicy, shippingInfo, warrantyInfomation }: Props) {
    return (
        <View className="px-4 mt-3 border-t border-gray-100 pt-2">
            <PolicyRow icon="return-up-back-outline" text={returnPolicy} />
            <PolicyRow icon="rocket-outline" text={shippingInfo} />
            <PolicyRow icon="shield-checkmark-outline" text={warrantyInfomation} />
        </View>
    )
}
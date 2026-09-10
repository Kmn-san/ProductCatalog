import { ActivityIndicator, Text, View } from 'react-native';

export default function ListFooter({ isLoadingMore, hasMore }: { isLoadingMore: boolean, hasMore: boolean }) {
    if (isLoadingMore) {
        return (
            <View className="py-4">
                <ActivityIndicator size="small" />
            </View>
        )
    }
    if (!hasMore) {
        return (
            <View className="py-4">
                <Text className="text-center text-gray-400 text-sm">This is the end!</Text>
            </View>
        );
    }

    return null;
}
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, View } from 'react-native';

type Props = {
  onRetry: () => void;
}

export default function ErrorState({ onRetry }: Props) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-24 h-24 rounded-full bg-red-50 items-center justify-center mb-4">
        <Ionicons name="cloud-offline-outline" size={48} color="#EF4444" />
      </View>
      <Text className="text-lg font-semibold text-gray-900 text-center">
        Oops! Something went wrong.
      </Text>
      <Text className="text-sm text-gray-500 text-center mt-1">
        Please check your connection and try again.
      </Text>
      <Pressable
        onPress={onRetry}
        className="bg-black rounded-full px-8 py-3 mt-6 active:opacity-70">
        <Text className="text-white font-semibold">Retry</Text>
      </Pressable>
    </View>

  )
}
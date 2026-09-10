import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, View } from 'react-native'

export default function EmptyState() {
  return (
    <View className="flex-1 items-center justify-center px-8 py-20">
      <View className="w-24 h-24 rounded-full bg-gray-100 items-center justify-center mb-4">
        <Ionicons name="cube-outline" size={48} color="#9CA3AF" />
      </View>

      <Text className="text-lg font-semibold text-gray-900 text-center">
        Oh no! No such item.
      </Text>
      <Text className="text-sm text-gray-500 text-center mt-1">
        Try another keyword.
      </Text>
    </View>
  )
}
import { useState } from "react";
import { Text, View } from "react-native";
import ErrorState from "../components/ErrorState";
import SkeletonList from "../components/SkeletonList";
import useProducts from "../hooks/useProducts";

export default function MainScreen() {
  const [searchText, setSearchText] = useState('');

  const { data, isLoading, isError, refetch } = useProducts(searchText);

  if (isLoading) return <SkeletonList />
  if (isError) return <ErrorState />

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}


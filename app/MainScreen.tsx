import { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import ProductCard from "../components/ProductCard";
import SkeletonList from "../components/SkeletonList";
import useProducts from "../hooks/useProducts";

export default function MainScreen() {
  const [searchText, setSearchText] = useState('');

  const { data, isLoading, isError, refetch, isRefetching } = useProducts(searchText);

  const products = data?.pages.flatMap(page => page.products) ?? [];

  if (isLoading) return <SkeletonList />
  if (isError) return <ErrorState onRetry={refetch} />
  if (products.length === 0) return <EmptyState />

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 8 }}
        onRefresh={refetch}
        refreshing={isRefetching}
      />
    </SafeAreaView>
  );
}


import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import ListFooter from "../components/ListFooter";
import ProductCard from "../components/ProductCard";
import SkeletonList from "../components/SkeletonList";
import useProducts from "../hooks/useProducts";

export default function MainScreen() {
  const [searchText, setSearchText] = useState('');

  const { data, isLoading, isError, refetch, isRefetching, hasNextPage, isFetchingNextPage, fetchNextPage } = useProducts(searchText);

  const products = data?.pages.flatMap(page => page.products) ?? [];

  const renderItem = useCallback(
    ({ item }: any) => <ProductCard item={item} />, []
  )

  if (isLoading) return <SkeletonList />
  if (isError) return <ErrorState onRetry={refetch} />
  if (products.length === 0) return <EmptyState />

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        onRefresh={refetch}
        refreshing={isRefetching}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
          }
        }}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListFooterComponent={
          <ListFooter hasMore={hasNextPage} isLoadingMore={isFetchingNextPage} />
        }
      />
    </SafeAreaView >
  );
}


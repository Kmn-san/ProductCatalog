import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts, searchProduct } from "../lib/api";

function useProducts(searchQuery: string) {
    return useInfiniteQuery({
        queryKey: ['products', searchQuery],
        queryFn: async ({ pageParam }) => {
            if (searchQuery) {
                return searchProduct(searchQuery)
            }
            return getProducts(pageParam)
        },
        // first page is 0
        initialPageParam: 0,

        getNextPageParam: (lastPage) => {
            const loadedCount = lastPage.skip + lastPage.products.length;
            return loadedCount < lastPage.total ? loadedCount : undefined
        }
    })
}

export default useProducts;
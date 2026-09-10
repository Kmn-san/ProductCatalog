import api from "./axios";

export const getProducts = async (pageParam: number) => {
    const response = await api.get(`/products?limit=20&skip=${pageParam}`);
    return response.data;
}

export const getProductDetial = async (id: number) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
}

export const searchProduct = async (query: string) => {
    const response = await api.get(`/products/search`, {
        params: { q:query }
    });
    return response.data;
}
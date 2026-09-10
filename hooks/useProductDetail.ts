import { useEffect, useState } from "react";
import { getProductDetial } from "../lib/api";
import { Product } from "../types/Product";

function useProductDetail(id: number) {
    const [product, setProduct] = useState<Product | null>(null);
    const [status, setStatus] = useState('loading');

    const fetchDetail = async () => {
        setStatus('loading');
        try {
            const res = await getProductDetial(id);
            setProduct(res);
            setStatus('success');
        } catch (error) {
            setStatus('error')
            console.log(error);
        }
    };
    useEffect(() => {
        fetchDetail();
    }, [id]);
    return { product, status, retry: fetchDetail }
}

export default useProductDetail
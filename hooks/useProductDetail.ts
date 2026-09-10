import { useEffect, useState } from "react";
import { getProductDetial } from "../lib/api";

function useProductDetail(id: number) {
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState('loading');

    const fetchDetail = async () => {
        setStatus('loading');
        try {
            const res = await getProductDetial(id);
            setProduct(res.data);
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
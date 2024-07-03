import { notFound } from "next/navigation";

export default function ProductDetail({ params } : { params: { productId: string }; }) {
    if(parseInt(params.productId) > 5) {
        return notFound();
    }
    return <h1>Prduct detail { params.productId }</h1>
}
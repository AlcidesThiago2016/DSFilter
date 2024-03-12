import { useContext, useEffect, useState } from "react";
import { ContextProductCount } from "../../utils/context-product";
import { ProductDTO } from "../../Models/products";
import { findByPrice } from "../../Services/product-service";
import Filter from "../Filter";
import Listing from "../Listing";

type QueryParams = {
    minPrice: number;
    maxPrice: number;
};

export default function ListingBody(){

    const { contextProductCount, setContextProductCount } = useContext(ContextProductCount);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        minPrice: 0,
        maxPrice: Number.MAX_VALUE,
    });

    useEffect(() => {
        const filteredProducts = findByPrice(
            queryParams.minPrice,
            queryParams.maxPrice
        );
        setProducts(filteredProducts);
        setContextProductCount(filteredProducts.length);
    }, [queryParams, setContextProductCount]);
    return(
        <main>
            <div className="dsf-container">
                <Filter
                    onFilter={(min, max) =>
                    setQueryParams({minPrice: min, maxPrice: max})} 
                />
                {contextProductCount === 0 ? (<h3>Produtos não encontrados!</h3>) : (
                    <Listing product={products} />
                )}
            </div>
        </main>
    );
}
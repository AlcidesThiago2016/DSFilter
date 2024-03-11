import { ProductDTO } from "../../Models/products";
import "./styles.css";

type Props = {
    product: ProductDTO[];
};

export default function Listing({product} : Props){
    return(
        <div className="dsf-card-listing-container dsf-mb20">
            {product.map((product) => (
                <div key={product.id} className="dsf-card-listing">
                    <p>{product.name}</p>
                    <h4>R$ {product.price.toFixed(2)} </h4>
                </div>
            ))}
        </div>
    );
}
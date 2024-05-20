import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            setProducts(getProducts());
            console.log(getProducts());
        }, []
    );

    return (
        <>
            <div className="row">
                {products.map(product=> (
                    <div className="col-4 my-2" key={product.id}>
                        <ProductCardView handler={handler} id={product.id} name={product.name} description={product.description} price={product.price} />
                    </div>
                ))}
            </div>
        </>
    );
}
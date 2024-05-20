import { useEffect, useReducer } from "react";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActios";
import { itemsReducer } from "../reducer/itemsReducer";

const initCartItem = JSON.parse(sessionStorage.getItem("cart")) || []; //".parse" convertimos el string en un objeto

export const useItemsCart = () => {
    const [cartItems, dispatch ] = useReducer(itemsReducer,initCartItem);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((item) => item.product.id === product.id);

        if (hasItem) {

            dispatch (
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );

        } else {
            dispatch ({
                type: AddProductCart,
                payload:product,
            }
            );
        }
    }

    const handlerDeleteProduct = (id) =>  {
        dispatch({
            type: DeleteProductCart,
            payload:id,
        })
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProduct,
    }

}
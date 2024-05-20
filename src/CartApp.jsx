import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProduct } = useItemsCart();

    return (<>
        <Navbar/>
        <div className="container">
            <h1>Cart App</h1>

            <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProduct={handlerDeleteProduct} />
        </div>
    </>)
}
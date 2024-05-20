import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { calculateTotal } from '../services/productServices';


export const CartView = ({items, handlerDelete}) => {

    const [total, setTotal] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items])

    const onDeleteProduct = (id) => {
        handlerDelete(id);
    }

    const onCatalog = () => {
        navigate('/catalog')
    }
    return (
        <>
            <h3>Carro de compras</h3>

            <table className="table table-hover  table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    { items.map(item => (
                        <tr key ={item.product.id}> 
                        <td>{item.product.name}</td>
                        <td>{item.product.description}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.product.price}</td>
                        <td><button className='btn btn-danger' onClick={()=>onDeleteProduct(item.product.id)} >Eliminar</button></td>
                    </tr>
                    ))}
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-end fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
            <button className='btn btn-success' onClick={onCatalog}>Seguir comprando</button>
        </>
    )
}

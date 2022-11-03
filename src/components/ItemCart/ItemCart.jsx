import React from 'react';
import './itemCart.css';
import { useCartContext } from '../CartContext/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className="itemCart">
        <img src={product.img} alt={product.title} />
        <div>
            <p>Ttitulo: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio u.: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id) } className="btn btn-outline-danger">Eliminar</button>
        </div>
      </div>
    )
}

export default ItemCart;
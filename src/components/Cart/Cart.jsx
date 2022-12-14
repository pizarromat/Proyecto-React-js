import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'Juan',
      email: 'juan@gmail.com',
      phone: '123123',
      address: 'adrsas'
    },
    item: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
    
  }
 
  if (cart.lenght === 0) {
    return(
      <>
        <p>No hay elementos en el carrito.</p>
        <Link to='/'>Inicio</Link>
      </>
    );
  }

  return (
    <>
      <section className="fondo-contacto" />

      <div className="cart">
        {
          cart.map(product => <ItemCart key={product.id} product={product} />)
        }

        <p className="parrafo-carrito">
          total: ${totalPrice()}.
        </p>
        <div className="d-grid col-1 mx-auto">
          <button onClick={handleClick} className="btn btn-outline-danger boton-carrito">Emitir Compra</button>
        </div>
      
      </div>

      <section class="fondo-contacto"></section>
    </>
  )
}

export default Cart;
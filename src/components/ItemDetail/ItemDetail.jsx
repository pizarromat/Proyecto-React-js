import React, { useState } from 'react'
import './itemDetail.css';
import { useCartContext } from '../CartContext/CartContext';
import ItemCount from "../ItemCount/ItemCount"; 
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

    return (
      <>
        <section className="fondo-productos">
          <h2 className="Titulo-paginas" >Comprar</h2>
        </section>

        <section>
          <div className="container">
            <div className="detail">
              <img className="detail_image" src={data.img} alt="" />
              <div className="content">
                <h1>{data.title}</h1>
                {
                  goToCart
                  ? <Link to='/cart' className=" btn btn-outline-secondary "> Terminar Compra </Link>
                  : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
              </div>
            </div>
          </div>
        </section>

        <section class="fondo-productos"></section>
      </>
      
    );
}

export default ItemDetail;
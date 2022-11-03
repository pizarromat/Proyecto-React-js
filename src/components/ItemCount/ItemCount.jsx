
import './itemCount.css'

import React, { useState, useEffect } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])
    
    return (
        
      <div className="counter">
        <div className="contador-item">
            <button disabled={count <= 1} onClick={decrease} className="suma-resta btn btn-outline-danger">-</button>
            <span className="count-span">{count}</span>
            <button disabled={count >= stock} onClick={increase} className="suma-resta btn btn-outline-success">+</button>
        </div>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-outline-secondary">Agregar al carrito</button>
        </div>
      </div>
    )
}

export default ItemCount;
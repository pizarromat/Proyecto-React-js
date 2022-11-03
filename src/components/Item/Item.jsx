import './item.css';
import { Link } from 'react-router-dom';

import React from 'react';

const Item = ({ info }) => {

    return (
        <Link to={`/detalle/${info.id}`}  className="film">
            <div className="text-center tabla">
                <img src={info.img} alt="" />
                <p>{info.title}</p>
            </div>
            
        </Link>
    );
}

export default Item;
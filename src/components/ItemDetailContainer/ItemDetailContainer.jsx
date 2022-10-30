import React, { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";


/* importacion de imagenes de pizzas*/

import muzzarella from '../../assets/img/Pizza Muzzarela.jpg'
import calabreza from '../../assets/img/Pizza CALABREZA.png'
import fugazetta from '../../assets/img/Pizza FUGAZETTA.png'
import morron from '../../assets/img/Pizza Muzzarela-Morron.png'
import anchoa from '../../assets/img/Pizza de ANCHOA.png'
import albaca from '../../assets/img/Pizza TOMATE-ALBACA.png'

/* importacion de imagenes de variados */

import asado from '../../assets/img/asado.jpg'
import empanadas from '../../assets/img/empanadas.jpg'
import tacos from '../../assets/img/tacos.jpg'
import papasfritas from '../../assets/img/papasfritas.jpg'
import fideos from '../../assets/img/fideos.jpg'
import hamburguesas from '../../assets/img/hamburguesas.jpg'


const films = [
  {
      id: 1,
      img: muzzarella,
      title: 'Pizza Muzzarella',
      category: 'pizzas',
      price: 9.99,
  },
  {
      id: 2,
      img: calabreza,
      title: 'Pizza Calabreza',
      category: 'pizzas',
      price: 9.99,
  },
  {
      id: 3,
      img: fugazetta,
      title: 'Pizza Fuggazetta',
      category: 'pizzas',
      price: 9.99,
  },
  {
      id: 4,
      img: morron,
      title: 'Pizza Muzzarella y Morron',
      category: 'pizzas',
      price: 9.99,
  },
  {
      id: 5,
      img: anchoa,
      title: 'Pizza Anchoa',
      category: 'pizzas',
      price: 9.99,
  },
  {
      id: 6,
      img: albaca,
      title: 'Pizza Tomate y Albaca',
      category: 'pizzas',
      price: 9.99,
  },


  {
      id: 7,
      img: asado,
      title: 'Asado',
      category: 'variedad',
      price: 9.99,
  },
  {
      id: 8,
      img: empanadas,
      title: 'Empanadas',
      category: 'variedad',
      price: 9.99,
  },
  {
      id: 9,
      img: tacos,
      title: 'Tacos',
      category: 'variedad',
      price: 9.99,
  },
  {
      id: 10,
      img: papasfritas,
      title: 'Papas Fritas',
      category: 'variedad',
      price: 9.99,
  },
  {
      id: 11,
      img: fideos,
      title: 'Fideos',
      category: 'variedad',
      price: 9.99,
  },
  {
      id: 12,
      img: hamburguesas,
      title: 'Hmaburguesas',
      category: 'variedad',
      price: 9.99,
  },



];

const ItemDetailContainer = () => {

  const[data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);
      }, 1000);
    });

    getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
  }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = ({gretting}) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(products => ({id: products.id, ...products.data() }))))
        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(products => ({id: products.id, ...products.data() }))))
        }
    }, [categoriaId])

    return (
        <>
            <section className="fondo-productos">
                <h2 className="Titulo-paginas" >Comprar</h2>
            </section>

            <section className="compra">
                <h1>{gretting}</h1> 
                <ItemList data={data}/>
            </section>
            
            <section class="fondo-productos"></section>
        </>
        
    );
}

export default ItemListConteiner;
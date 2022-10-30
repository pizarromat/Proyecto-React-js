import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListConteiner from '../ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const Compra = () => {
  return (
    <>
    
    <section className="fondo-productos">
        <h2 className="Titulo-paginas" >Compra</h2>
    </section>

    <main >
        <div >
            <div>
                <h1 className="titulo-competencias">Pizzas</h1>
            </div> 
        </div>

        <BrowserRouter>
          <Routes>
            {/*
            <Route path='/categoria' element={<ItemListConteiner gretting={'aca iria el footer'}/>} />
            <Route path='/detalle' element={<ItemDetailContainer />} /> */}
          </Routes>
        </BrowserRouter>

        <ItemListConteiner gretting={'aca iria el footer'}/>
        <ItemDetailContainer />
        
    </main>

    
    <section class="fondo-productos"></section>

    </>
  )
}

export default Compra
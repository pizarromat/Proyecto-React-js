import React from 'react'

/* import de imagenes de las pizzas */
import muzzarela from '../../assets/img/Pizza Muzzarela.jpg'
import calabreza from '../../assets/img/Pizza CALABREZA.png'
import fugazetta from '../../assets/img/Pizza FUGAZETTA.png'
import morron from '../../assets/img/Pizza Muzzarela-Morron.png'
import anchoa from '../../assets/img/Pizza de ANCHOA.png'
import albaca from '../../assets/img/Pizza TOMATE-ALBACA.png'

const Compra = () => {
  return (
    <>
    
    <section className="fondo-productos">
        <h2 className="Titulo-paginas" >Carta</h2>
    </section>

    <main >
        <div >
            <div>
                <h1 className="titulo-competencias">Pizzas</h1>
            </div> 
        </div>

        <section className="items"> 
            <div className="item ">
                <div>
                    <img 
                      src={ muzzarela }
                      className="item-image" 
                      alt="Pizza Muzzarela"
                      />
                </div>
                <div className="informacion-pizza">
                    <p className="item-title">Pizza Muzzarela</p>
                </div>
                
                <div className="item-details">
                    <span className="item-price">9.99€</span>
                    <div className="boton-precio">
                        <button className="boton addToCart">Agregar</button>
                    </div>
                </div>
            </div>
            <div className="item ">
                <div>
                  <img 
                    className="item-image" 
                    src={ calabreza }
                    alt="Pizza Calabreza"
                  />
                </div>
                <div className="informacion-pizza">
                    <p className="item-title">Pizza Calabreza</p>
                </div>

                <div className="item-details">
                    <span className="item-price">9.99€</span>
                    <div className="boton-precio">
                        <button className="boton addToCart">Agregar</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <div>
                  <img 
                    className="item-image" 
                    src={ fugazetta }
                    alt="Pizza Fugazetta"
                  />
                </div>
                <div className="informacion-pizza">
                    <p className="item-title">Pizza Fugazetta</p>
                </div>

                <div className="item-details">
                    <span className="item-price">9.99€</span>
                    <div className="boton-precio">
                        <button className="boton addToCart">Agregar</button>
                    </div>
                </div>
            </div>
        
            <div className="item">
                <div>
                  <img 
                    className="item-image" 
                    src={ morron }
                    alt="Pizza Muzzarela-Morron"
                  />
                </div>
                <div className="informacion-pizza">
                    <p className="item-title">Pizza Muzzarela-Morron</p>
                </div>

                <div className="item-details">
                    <span className="item-price">9.99€</span>
                    <div className="boton-precio">
                        <button className="boton addToCart">Agregar</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <div>
                  <img 
                    className="item-image" 
                    src={ anchoa }
                    alt="Pizza de Anchoa"
                  />
                </div>
                <div className="informacion-pizza">
                    <p className="item-title">Pizza de Anchoa</p>
                </div>

                <div className="item-details">
                    <span className="item-price">9.99€</span>
                    <div claclassNamess="boton-precio">
                        <button className="boton addToCart">Agregar</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <div>
                  <img 
                    className="item-image" 
                    src={ albaca }
                    alt="Pizza Tomate-Albaca"
                  />
                </div>  
                <div className="informacion-pizza">
                    <p className="item-title">Pizza Tomate-Albaca</p>
                </div>

                <div className="item-details">
                    <span className="item-price">9.99€</span>
                    <div className="boton-precio">
                        <button className="boton addToCart">Agregar</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    
    <section class="fondo-productos"></section>

    </>
  )
}

export default Compra
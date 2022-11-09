import React from 'react'
import cajas from '../../assets/img/Cajas para Pizzas.png'



const Index = () => {
  return (
    <>
    <main className='header-inicio'>
      <h2 className='title-header'>Las mejores pizzas a la piedra</h2>
    </main>

    <section className='nosotros-inicio'>
      <h2 className='titulo-bienvenidos' data-aos="fade-right">
        Bienvenidos a la Pizzeria Provoleta
      </h2>
      <p className="p-bienvenidos" data-aos="fade-right" >Más de 20 años de tradición artesanal, haciendo hostória en España, nuestro lema fue mantener la calidad en todo, gracias a esto nuestro horno a leña no se apaga y sigue creando las mejores pizzas del pais.
      </p>
    </section>

    <section className="productos-inicio">
      <img 
        src={ cajas }
        alt="caja pedido" 
        height="400px"
      />
      <h2 className="titulo-envios" data-aos="fade-left">Envios a domicilio por Just Eat</h2>

    </section>

    <section class="segundaImagen-inicio"></section>

    

    </>
    
  )
}

export default Index;
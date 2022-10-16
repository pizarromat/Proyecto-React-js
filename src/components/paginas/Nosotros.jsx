import React from 'react';
import foto1 from '../../assets/img/chef-430073_1280.jpg';
import foto2 from '../../assets/img/pizzeria-4918997_1280.jpg'

const Nosotros = () => {
  return (
    <>
    
    <section className="fondo-nosotros">
    <h2 className="Titulo-paginas">Nosotros</h2>
    </section>

    <main className="main-nosotros">
    <div className="productos-bloques">

      <div >                
        <img 
          src={ foto1 }  
          alt="foto1" 
          width="400" 
          height="300" 
          data-aos="fade-up" 
        />               
      </div>

      <div className="detalle-fotos" data-aos="fade-up">                 
        <p>Más de 20 años de tradición artesanal, haciendo história en españa, nuestro lema  fue  mantener la calidad en todo, gracias a esto nuestro horno a leña no se apaga y sigue creando las mejores pizzas del pais.
        </p>       
      </div>

      <div >
        <img 
          src={ foto2 }  
          alt="foto2" 
          width="400" 
          height="300" 
          data-aos="fade-up" 
        />
      </div>

    </div>   

    </main>


    <section className="fondo-nosotros"></section>
    
    
    </>
  )
}

export default Nosotros
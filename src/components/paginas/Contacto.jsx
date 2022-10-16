import React from 'react'

const Contacto = () => {
  return (
    <>
    
    <section className="fondo-contacto">
    <h2 className="Titulo-paginas">Contacto</h2>
    </section>

    <main className="mainContacto">
        <div className="contacto_derecha">
          <h2 className="contacto_titulo">Contactese con nosotros</h2>
          <form className="contacto_form-wrapper" action="https://formspree.io/f/mgeqvywn"
          method="POST">
            <div className="contacto_input-line">
              <label for="name" className="contacto_label" name="name">Nombre</label>
              <input type="text" name="name" id="name" className="contacto_input" />
            </div>
            <div className="contacto_input-line">
              <label for="email" className="contacto_label" name="email">Email</label>
              <input type="email" name="email" id="email" className="contacto_input" />
            </div>
            <div className="contacto_input-line">
              <label for="message" className="contacto_label" name="message">Mensaje</label>
              <textarea name="message" id="message" className="contacto_input"></textarea>
            </div>
            <input type="submit" value="Enviar" className="contacto_submit-button" />
        </form>
      </div>
    </main>

    <section className="fondo-contacto"></section>
    
    </>

  )
}

export default Contacto
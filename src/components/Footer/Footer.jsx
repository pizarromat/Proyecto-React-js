import React from 'react'
import './footer.css';

import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'

const Footer = () => {
    return (
    <>
        <footer>
            <div class="redes">
                <img 
                    src={instagram} 
                    alt="logo Instagram"
                    className="iconos-footer"
                />
                <img 
                    src={facebook} 
                    alt="logo Facebook" 
                    className="iconos-footer"
                />
                <img 
                    src={twitter} 
                    alt="logo twitter" 
                    className="iconos-footer"
                />
            </div>
            <div>
                <small class="parrafoFooter"> &copy; Pizzeria provoleta</small>
            </div>
        </footer>
    </>
    )
}

export default Footer;
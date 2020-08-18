import React from 'react';

import {Link} from 'react-router-dom';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <div className='footer-container'>
            <Link className='footer-icono' to='/'>
                <img className='icono' src="https://i.ibb.co/sVCvWkj/logo.png" alt="logo"/>
            </Link>
            <div className='footer-seccion footer-seccion-1'>
                <ul className='footer-list'>
                    <li className="footer-item"><a href="https://github.com/GustavoABustamante" className="footer-link">Github</a></li>
                    <li className="footer-item"><a href="https://cl.linkedin.com/" className="footer-link">LinkedIn</a></li>
                    <li className="footer-item"><a href="https://cl.linkedin.com/" className="footer-link">Contáctate conmigo</a></li>
                    <li className="footer-item"><a href="https://cl.linkedin.com/" className="footer-link">Gratificaciones</a></li>
                </ul>
            </div>
            <div className='footer-seccion footer-seccion-2'>
                <p className='footer-copyright'>
                Este sitio web fue creado por mí para uso profesional y personal. Copyright &copy; por &nbsp;<a href="https://cl.linkedin.com/" className="footer-link">Gustavo A. Bustamante</a> desarrolador web.
                </p>
            </div>
        </div>
    </div>
);

export default Footer;

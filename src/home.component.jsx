import React from 'react';
import './home.styles.scss';

const Home = () => (
    <div className='home'>
        <div className='menu-principal'>
            <div className='item-menu'>
                <div className='contenido'>
                    <h1 className='titulo'>GORROS</h1>
                    <span className='subtitulo'>COMPRA AHORA</span>
                </div>
            </div>
            <div className='item-menu'>
                <div className='contenido'>
                    <h1 className='titulo'>CAMISETAS</h1>
                    <span className='subtitulo'>COMPRA AHORA</span>
                </div>
            </div>
            <div className='item-menu'>
                <div className='contenido'>
                    <h1 className='titulo'>POLERONES</h1>
                    <span className='subtitulo'>COMPRA AHORA</span>
                </div>
            </div>
            <div className='item-menu'>
                <div className='contenido'>
                    <h1 className='titulo'>HOMBRES</h1>
                    <span className='subtitulo'>COMPRA AHORA</span>
                </div>
            </div>
            <div className='item-menu'>
                <div className='contenido'>
                    <h1 className='titulo'>MUJERES</h1>
                    <span className='subtitulo'>COMPRA AHORA</span>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
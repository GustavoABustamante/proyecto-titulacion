import React from 'react';
import ItemMenu from '../item-menu/item-menu.component';
import './menu-principal.styles.scss';

class MenuPrincipal extends React.Component {
    constructor() {
        super();

        this.state = {
            secciones: [
                {
                  title: 'gorros',
                  imageUrl: 'https://i.ibb.co/6J94TC8/hats.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'camisetas',
                  imageUrl: 'https://i.ibb.co/5kjVZws/camisetas.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'zapatillas',
                  imageUrl: 'https://i.ibb.co/svgSXhX/zapatillas.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'mujeres',
                  imageUrl: 'https://i.ibb.co/pKLzTyq/mujer.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'hombres',
                  imageUrl: 'https://i.ibb.co/H2L4Tjk/hombre.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className="menu-principal">
                {
                    this.state.secciones.map(({title, imageUrl, id, size}) => (
                        <ItemMenu key={id} titulo={title} imagenUrl={imageUrl} tamanho={size} />
                    ))
                }
            </div>
        )
    }
}

export default MenuPrincipal;
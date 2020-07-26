const INITIAL_STATE = {
    secciones: [
        {
          titulo: 'gorros',
          imagenUrl: 'https://i.ibb.co/6J94TC8/hats.jpg',
          id: 1,
          linkUrl: 'articulos/gorros'
        },
        {
          titulo: 'camisetas',
          imagenUrl: 'https://i.ibb.co/5kjVZws/camisetas.jpg',
          id: 2,
          linkUrl: 'articulos/camisetas'
        },
        {
          titulo: 'zapatillas',
          imagenUrl: 'https://i.ibb.co/svgSXhX/zapatillas.jpg',
          id: 3,
          linkUrl: 'articulos/zapatillas'
        },
        {
          titulo: 'mujeres',
          imagenUrl: 'https://i.ibb.co/pKLzTyq/mujer.jpg',
          tamanho: 'large',
          id: 4,
          linkUrl: 'articulos/mujeres'
        },
        {
          titulo: 'hombres',
          imagenUrl: 'https://i.ibb.co/H2L4Tjk/hombre.jpg',
          tamanho: 'large',
          id: 5,
          linkUrl: 'articulos/hombres'
        }
      ]
};

const MenuPrincipalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default MenuPrincipalReducer;
const DATA_ARTICULOS = {
    gorros:{
      id: 1,
      titulo: 'GORROS',
      nombreRuta: 'gorros',
      items: [
        {
          id: 1,
          nombre: 'Mujer NY Yankees',
          imagenUrl: 'https://i.ibb.co/Fsw0CRv/womens-hat-1.jpg',
          precio: '19.990'
        },
        {
          id: 2,
          nombre: 'Hombre Pittsburgh Pirates',
          imagenUrl: 'https://i.ibb.co/0cknCxw/mens-hat-1.jpg',
          precio: 22.990
        },
        {
          id: 3,
          nombre: 'Mujer Houston Astros',
          imagenUrl: 'https://i.ibb.co/Y3WyPSS/womens-hat-2.jpg',
          precio: 19.990
        },
        {
          id: 4,
          nombre: 'Hombre NY Yankees',
          imagenUrl: 'https://i.ibb.co/YkH2ycy/mens-hat-2.jpg',
          precio: 19.990
        },
        {
          id: 5,
          nombre: 'Green Beanie',
          imagenUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          precio: 18
        },
        {
          id: 6,
          nombre: 'Palm Tree Cap',
          imagenUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          precio: 14
        },
        {
          id: 7,
          nombre: 'Red Beanie',
          imagenUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          precio: 18
        },
        {
          id: 8,
          nombre: 'Wolf Cap',
          imagenUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          precio: 14
        },
        {
          id: 9,
          nombre: 'Blue Snapback',
          imagenUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          precio: 16
        }
      ]
    },
    zapatillas:{
      id: 2,
      titulo: 'ZAPATILLAS',
      nombreRuta: 'zapatillas',
      items: [
        {
          id: 10,
          nombre: 'Adidas NMD',
          imagenUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          precio: 220
        },
        {
          id: 11,
          nombre: 'Adidas Yeezy',
          imagenUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          precio: 280
        },
        {
          id: 12,
          nombre: 'Black Converse',
          imagenUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          precio: 110
        },
        {
          id: 13,
          nombre: 'Nike White AirForce',
          imagenUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          precio: 160
        },
        {
          id: 14,
          nombre: 'Nike Red High Tops',
          imagenUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          precio: 160
        },
        {
          id: 15,
          nombre: 'Nike Brown High Tops',
          imagenUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          precio: 160
        },
        {
          id: 16,
          nombre: 'Air Jordan Limited',
          imagenUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          precio: 190
        },
        {
          id: 17,
          nombre: 'Timberlands',
          imagenUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          precio: 200
        }
      ]
    },
    camisetas:{
      id: 3,
      titulo: 'CAMISETAS',
      nombreRuta: 'camisetas',
      items: [
        {
          id: 18,
          nombre: 'Black Jean Shearling',
          imagenUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          precio: 125
        },
        {
          id: 19,
          nombre: 'Blue Jean Jacket',
          imagenUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          precio: 90
        },
        {
          id: 20,
          nombre: 'Grey Jean Jacket',
          imagenUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          precio: 90
        },
        {
          id: 21,
          nombre: 'Brown Shearling',
          imagenUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          precio: 165
        },
        {
          id: 22,
          nombre: 'Tan Trench',
          imagenUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          precio: 185
        }
      ]
    },
    mujeres:{
      id: 4,
      titulo: 'MUJER',
      nombreRuta: 'mujer',
      items: [
        {
          id: 23,
          nombre: 'Blue Tanktop',
          imagenUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          precio: 25
        },
        {
          id: 24,
          nombre: 'Floral Blouse',
          imagenUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          precio: 20
        },
        {
          id: 25,
          nombre: 'Floral Dress',
          imagenUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          precio: 80
        },
        {
          id: 26,
          nombre: 'Red Dots Dress',
          imagenUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          precio: 80
        },
        {
          id: 27,
          nombre: 'Striped Sweater',
          imagenUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          precio: 45
        },
        {
          id: 28,
          nombre: 'Yellow Track Suit',
          imagenUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          precio: 135
        },
        {
          id: 29,
          nombre: 'White Blouse',
          imagenUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          precio: 20
        }
      ]
    },
    hombres:{
      id: 5,
      titulo: 'HOMBRE',
      nombreRuta: 'hombre',
      items: [
        {
          id: 30,
          nombre: 'Camo Down Vest',
          imagenUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          precio: 325
        },
        {
          id: 31,
          nombre: 'Floral T-shirt',
          imagenUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          precio: 20
        },
        {
          id: 32,
          nombre: 'Black & White Longsleeve',
          imagenUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          precio: 25
        },
        {
          id: 33,
          nombre: 'Pink T-shirt',
          imagenUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          precio: 25
        },
        {
          id: 34,
          nombre: 'Jean Long Sleeve',
          imagenUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          precio: 40
        },
        {
          id: 35,
          nombre: 'Burgundy T-shirt',
          imagenUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          precio: 25
        }
      ]
    }
  }

  export default DATA_ARTICULOS;
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDescription from './ProductDescription';

describe("Product description component", ()=>{
    it('renders some props', () => {
        const props = {
            "product":{
               "id":"MLA885445674",
               "title":"Xiaomi Redmi Note 9 Dual Sim 128 Gb Gris Medianoche 4 Gb Ram",
               "price":{
                  "currency":"ARS",
                  "amount":38999
               },
               "picture":"http://http2.mlstatic.com/D_942199-MLA44161684825_112020-I.jpg",
               "condition":"Nuevo",
               "free_shipping":true,
               "city":"Capital Federal",
               "sold_quantity":500,
               "description":"Enfocate en lo importante\nEl novedoso sistema operativo Android 10 incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Además, incluye la función de Bienestar Digital y el Tema Oscuro, para que evites distracciones y logres una mayor concentración.\n\nMayor rendimiento\nSu memoria RAM de 4 GB te permitirá ejecutar varias aplicaciones al mismo tiempo, jugar y navegar con gran rapidez y sin inconvenientes.\n\nMás para ver\nCon su pantalla IPS de 6.53\", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.\n\nGran capacidad de almacenamiento\nCon su memoria interna de 128 GB podrás almacenar archivos y aplicaciones de gran tamaño sin necesidad de subirlos a la nube. Disfrutá de tus contenidos favoritos en todo momento.\n\nBatería superior\n¡Desenchufate! Con la súper batería de 5020 mAh, tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de recargar tu teléfono.\n\nFotografía profesional en tu bolsillo\nDescubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Gracias a la cámara teleobjetivo capturarás detalles casi imperceptibles, con la de ángulo amplio sacarás fotos nítidas y la ultra gran angular te permitirá obtener imágenes panorámicas excepcionales. ¿Amás los fondos difuminados? Vas a conseguirlos con el famoso modo retrato de la cuarta cámara.\n\n Además, el dispositivo cuenta con cámara frontal de 13 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nTecnología premium\nMaximizá tu seguridad y asegurate de que solo vos puedas desbloquear el equipo. Gracias al sensor de huella dactilar, podrás habilitar tu dispositivo con solo un toque. Además, cuenta con reconocimiento facial que se activa rápidamente al colocar la pantalla frente a tu rostro.",
               "category_id":"MLA1055"
            }
        }

        render(<ProductDescription {...props}/>);
        expect(screen.getByText(`${props.product.title}`));
        expect(screen.getByText(`${props.product.condition} - ${props.product.sold_quantity} vendidos`));
    });
})

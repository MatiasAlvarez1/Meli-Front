import React from 'react';
import { render, screen, getAllByTestId } from '@testing-library/react';
import ProductsList from './ProductsList';

describe("Product List component", ()=>{
    it('expect render all props.results.items', () => {
        const props = {
            "results":{
               "author":{
                  "name":"Matias",
                  "lastname":"Alvarez"
               },
               "categories":[
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055",
                  "MLA1055"
               ],
               "items":[
                  {
                     "id":"MLA885445674",
                     "title":"Xiaomi Redmi Note 9 Dual Sim 128 Gb Gris Medianoche 4 Gb Ram",
                     "price":{
                        "currency":"ARS",
                        "amount":38999
                     },
                     "picture":"http://http2.mlstatic.com/D_942199-MLA44161684825_112020-I.jpg",
                     "condition":"Nuevo",
                     "free_shipping":true,
                     "city":"Capital Federal"
                  },
                  {
                     "id":"MLA909522482",
                     "title":"Philco P241 Dual Sim 512 Mb Negro 256 Mb Ram",
                     "price":{
                        "currency":"ARS",
                        "amount":6199
                     },
                     "picture":"http://http2.mlstatic.com/D_672837-MLA40668754262_022020-I.jpg",
                     "condition":"Nuevo",
                     "free_shipping":false,
                     "city":"Buenos Aires"
                  },
                  {
                     "id":"MLA910260553",
                     "title":"Nokia 106 (2018) 4 Mb Gris Oscuro 4 Mb Ram",
                     "price":{
                        "currency":"ARS",
                        "amount":6756
                     },
                     "picture":"http://http2.mlstatic.com/D_822663-MLA41813920064_052020-I.jpg",
                     "condition":"Nuevo",
                     "free_shipping":true,
                     "city":"Córdoba"
                  },
                  {
                     "id":"MLA898879837",
                     "title":"LG K20 16 Gb Aurora Black 1 Gb Ram",
                     "price":{
                        "currency":"ARS",
                        "amount":15999
                     },
                     "picture":"http://http2.mlstatic.com/D_895473-MLA42513662374_072020-I.jpg",
                     "condition":"Nuevo",
                     "free_shipping":true,
                     "city":"Capital Federal"
                  }
               ]
            }
         }

        const { getAllByTestId } = render(<ProductsList {...props}/>);

        const listItems = getAllByTestId('product__container');
        expect(listItems).toHaveLength(props.results.items.length);
    });
})

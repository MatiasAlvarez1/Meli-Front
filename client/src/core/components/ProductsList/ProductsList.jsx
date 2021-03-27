import React from "react";
import Product from "./Product/Product";
import "./ProductsList.scss"

function ProductsList(props){
    return(
        <div className="products__list__container">
            {props.results.items.map(item=>{
                return <Product product={item} handleSelectProduct={props.handleSelectProduct} key={item.id} />
            })}
        </div>
    )
}

export default ProductsList;
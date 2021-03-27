import React from "react";
import "./ProductDescription.scss";
import formatToPrice from "../../utils/priceFormater";

function ProductDescription(props){
    return(
        <div className="product__description__container">
            <div className="product__description__details">
                <img className="product__description__img" src={props.product.picture} alt=""></img>
                <div className="product__description__title">Descripción del producto</div>
                <div className="product__description__info">{props.product.description}</div>
            </div>
            <div className="product__description__price">
                <div className="product__description__price__condition">{props.product.condition} - {props.product.sold_quantity} vendidos</div>
                <div className="product__description__price__name">{props.product.title}</div>
                <div className="product__description__price__number">{formatToPrice(props.product.price.amount, props.product.price.currency)}</div>
                <div className="product__description__price__buy">
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;
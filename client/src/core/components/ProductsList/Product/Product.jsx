import React from "react";
import "./Product.scss";
import formatToPrice from "../../../utils/priceFormater";

function Product(props) {
    return (
        <div className="product__container" onClick={()=>props.handleSelectProduct(props.product)} data-testid="product__container">
            <img className="product__image" src={props.product.picture} alt=""></img>
            <div className="product__details">
                <div className="product__price">{formatToPrice(props.product.price.amount, props.product.price.currency)}</div>
                <div className="product__title">{props.product.title}</div>
            </div>
            <div className="product__city">{props.product.city}</div>
        </div>
    );
}

export default Product;
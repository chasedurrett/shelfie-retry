import React from "react";
import "./Product.css";

export default function Product(props) {

    const { item: {id, name, price, img}, deleteProduct, updateSelectedProduct} = props
    return (
      <div>
        <div className="product-container">
          <img className="product-image" alt="product" src={img} />
          <div>
            <h1 className="product-name">{name}</h1>
            <h2 className="product-price">${price}</h2>
          </div>
          <div>
            <button onClick={() => deleteProduct(id)}>Delete</button>
            <button onClick={() => updateSelectedProduct({id, name, price, img})}>Edit</button>
          </div>
        </div>
      </div>
    );
}

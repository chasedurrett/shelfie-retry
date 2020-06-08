import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="product-container">
          <img className="product-image" alt="product" src={this.props.img} />
          <div>
            <h1 className="product-name">{this.props.name}</h1>
            <h2 className="product-price">${this.props.price}</h2>
          </div>
          <div>
            <button onClick={() => this.props.deleteProduct(this.props.id)}>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    );
  }
}
